# Projeto de testes automatizados com Nightwatchjs
- Tela de Login facebook modo web

## Para Iniciar e realizar a primeira execução:

#### 1. Install Nightwatch from NPM
```sh
$ npm install nightwatch --save-dev
```
#### 2. Install Browser Drivers:
##### Geckodriver (Firefox):
Geckodriver is the WebDriver service used to drive the [Mozilla Firefox Browser](https://www.mozilla.org/en-US/firefox/new/).
```sh
$ npm install geckodriver --save-dev
```
##### Chromedriver:
Chromedriver is the WebDriver service used to drive the [Google Chrome Browser](https://www.google.com/chrome/).
```sh
$ npm install chromedriver --save-dev
```
or install everything with one line:
```sh
$ npm i nightwatch geckodriver chromedriver --save-dev
```
#### 3. Run Test:
#### All Tests/Regression
```sh
$ npm test 
```
#### Test tags
```sh
$ npm test -- --tag <nameTag>
```
#### Test Group
```sh
$ npm test --group <group>
```
__Windows users__ might need to run `node node_modules/.bin/nightwatch`.

