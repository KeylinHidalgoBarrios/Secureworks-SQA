# Secureworks-SQA
Automation assessment for Secureworks Senior QA position

# Configuration
## Dependencies
### Playground project
- Install [Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAjwkoz7BRBPEiwAeKw3qy4vzr1hRsbuQ1kWsQbWAy_TvEqyoLvpyvStnqstGR2rKH_ljER0FRoCBXwQAvD_BwE&gclsrc=aw.ds) Browser
- Install [Node.js](https://nodejs.org/en/download/)
  - Install LTS version
  - Use all settings by default
- Install [Git](https://git-scm.com/downloads)
  - Download installer for your SO
  - Install
  - Use all settings by default
- Install IDE [Visual Studio Code](https://code.visualstudio.com/download)
  - Download installer for your SO
  - Install
  - Use all settings by default
### ReversedWordAssessment project
- Download and Install [Python](https://www.python.org/downloads/)
  - Make sure you activate the 'Add python to environment variables' checkbox
- Install IDE [Visual Studio Code](https://code.visualstudio.com/download)
  - Download installer for your SO
  - Install
  - Use all settings by default

## Environment configuration
### Playground project
- Close Chrome and VS Code so it can recognize Node.js and npm 
- Reopen VS Code
- Open terminal in command prompt mode
  - Run command 'node -v'
    - Node.js version displays
  - Run command 'npm -v'
    - Node package manager version displays
### ReversedWordAssessment project
- Open VS Code
- Open terminal in command prompt mode
  - Run command 'python --version'
    - python version displays

## Clone repo:
- On Github, click Clone or Download option
- Copy the link
- On your local machine go to the folder where you want to clone the repository
- Right click on the explorer and click Git bash here
- Type 'git clone insert_copied_link_here'
- Hit enter

## Cypress installation
- Open VS Code
- Open folder where Playground project was downloaded
- Run command 'npm install cypress --save-dev'


# Run tests
## Playground project
### Project containing automated tests using Cypress.

- Open Visual Studio Code
- Open Playground project root folder
- Open terminal
- Run command 'npx cypress open'
- Click createArticle.spec.js test from Cypress runner.

## ReversedWordsAssessment project
### Project that reads from TXT files with words and returns the larger word and its reversed version
- Open Visual Studio Code
- Open ReversedWordsAssessment project folder
- Open test folder in terminal
- Execute command 'python reverse_words_test.py' to execute unit tests
