/// <reference types="Cypress" />

describe('Verify the process of creating an product, adding to cart and then delete it from API', function() {

    beforeEach(() => {
        cy.fixture('product.json').then(productJson => {
            // Product creation API request
            cy.request({
                method: "POST",
                url: Cypress.env('apiURL'),
                body: productJson,
                auth: {
                    'user': Cypress.env('username'),
                    'pass': Cypress.env('password')
                    },
                headers: {                    
                    'Content-Type': 'application/json'    
                    }
            }).then(response => {
                expect(response.status).to.equal(201)

                // Adding id of the product to the context for later deletion
                cy.wrap(response.body.id).as('productId')
            })
            
            // Adding fixture to context for data cleanup
            cy.wrap(productJson).as('productJson')
        })
    })

    it('adding product to cart and data cleanup', function() {
        // Visiting the recently created product page
        cy.visit('/product/'+this.productJson.name+'/')

        // Page loaded assertion
        cy.get('.storefront-breadcrumb .woocommerce-breadcrumb').should('contain', this.productJson.name)

        const quantity = 7
        cy.get('[class="summary entry-summary"]').then(form => {
            // Product title assertion
            cy.wrap(form).should('contain', this.productJson.name)
            // Product regular price assertion
            cy.wrap(form).should('contain', this.productJson.regular_price)
            // Setting quantity of products
            cy.wrap(form).get('[class="input-text qty text"]').then(quantityInput => {
                cy.wrap(quantityInput).clear().type(quantity)
                cy.wrap(quantityInput).should('have.value', quantity)
            })
            //****************************** ASSERTION */
            // Adding to cart
            cy.wrap(form).contains('Add to cart').click()
        })
        
        cy.get('.storefront-primary-navigation .site-header-cart').then(cart => {
            // Cart has the set quantity of the product assertion
            cy.wrap(cart).should('contain', quantity+' items')
            // Go to cart page
            cy.wrap(cart).click()
            // Cart page assertion
            cy.url().should('contain', Cypress.config().baseUrl+'/cart/')
        })

        cy.get('.woocommerce-cart-form').then(list => {
            // Product name displayed under cart list assertion
            cy.wrap(list).get('td[class="product-name"]').should('contain', this.productJson.name)
            // Product price displayed under cart list assertion
            cy.wrap(list).get('td[class="product-price"] span[class="woocommerce-Price-amount amount"]').should('contain', this.productJson.regular_price)
            // Product set quantity displayed under cart list assertion
            cy.wrap(list).get('td[class="product-quantity"] input').should('have.value', quantity)
            // Product sub-total (quantity*regular price) displayed under cart list assertion
            cy.wrap(list).get('td[class="product-subtotal"]').should('contain', (parseFloat(this.productJson.regular_price)*quantity).toFixed(2))
        })  

        // Data cleanup API request
        cy.request({
            method: "DELETE",
            url: Cypress.env('apiURL')+this.productId+'?force=true',
            auth: {
                'user': Cypress.env('username'),
                'pass': Cypress.env('password')
                }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})