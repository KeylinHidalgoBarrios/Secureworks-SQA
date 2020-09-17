# Secureworks-SQA
Automation assessment for Secureworks Senior QA

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
    - Node packafe manager version displays
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
- Type 'git clone <link copied above>'
- Hit enter

## Run tests
### Playground project
#### Project containing automated tests using Cypress.

- Open Visual Studio Code
- Open Playground project root folder
- Open terminal
- Run command 'npm install'
  - This will install cypress
- After installation run command 'npx cypress open'
- Click the spec test file to run the tests

### ReversedWordsAssessment project
#### Project that reads from TXT files with words and returns the larger word and its reversed version
- Open Visual Studio Code
- Open ReversedWordsAssessment project folder
- Open test folder in terminal
- Execute command 'python reverse_words_test.py' to execute unit tests
