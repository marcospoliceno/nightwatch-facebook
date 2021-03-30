const data = require('../../data/globalData')
/**
Resultados 1-2: Ao realizar a ação de entrar deve ser direcionado para outra página exibindo somente o campo senha e a mensagem/alerta 
 “A senha inserida está incorreta. Esqueceu a senha?” possibilitando acessar o link Esqueceu a senha,
  diretamente pela mensagem/alerta ou por um segundo link logo abaixo;

Resultados 3-4: Ao realizar a ação de entrar, deve ser direcionado para outra página exibindo o campo email/telefone(alerta) e a mensagem/alerta  
“O email ou o número de celular que você inseriu não está conectado a uma conta. Encontre sua conta e entre.” 
 */
module.exports = {

    '@tags': ['login-incorreto'],

    beforeEach: function (browser) {
        browser.page.loginPage.loginPage().navigate()
    },
    'Cenário 1: Deve estar na página de login e  inserir o dado de email válido “marcostestvizir@gmail.com” e clicar em entrar;': function (browser) {
        browser.page.loginPage.loginPage().emailValido()
            .assert.containsText('@formLoginNameEnter', 'Entrar como Marcos Testes')
            .assert.containsText('@formLoginEmail', 'marcostestvizir@gmail.com')
            .assert.attributeContains('@linkNaoEVoce', 'href', data.urls.urlNaoEVoce)
            .assert.cssProperty('@alertEmailLogin', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLogin', 'A senha inserida está incorreta.')
            .assert.cssProperty('@alertEmailLoginLink', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLoginLink', 'Esqueceu a senha?')
            .assert.elementPresent('@buttonEntrar')
            .assert.elementPresent('@buttonContaGoogle')
            .assert.containsText('@linkEsqueceuSenhaFormLogin', 'Esqueceu a senha?')
            .assert.cssProperty('@linkEsqueceuSenhaFormLogin', 'color', 'rgb(28, 30, 33)')
    },
    'Cenário 2: Deve estar na página de login e inserir os dados de telefone válido “4949494949” e clicar em entrar;': function (browser) {
        browser.page.loginPage.loginPage().telefoneValido()
            .waitForElementVisible('@formLoginTelefoneSpanEntrar', 20000)
            .assert.attributeContains('@imageLogin', 'src', data.urls.urlImageFacebook)
            .assert.containsText('@formLoginTelefoneSpanEntrar', 'Entrar no Facebook')
            .assert.valueContains('@inputEmailNumber', '49494949')
            .assert.containsText('@inputPassword', "")
            .assert.cssProperty('@alertEmailLogin', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLogin', 'A senha inserida está incorreta.')
            .assert.cssProperty('@alertEmailLoginLink', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLoginLink', 'Esqueceu a senha?')
            .assert.elementPresent('@buttonEntrar')
            .assert.elementPresent('@buttonContaGoogle')
            .assert.containsText('@linkEsqueceuSenhaFormLogin', 'Esqueceu a senha?')
            .assert.cssProperty('@linkEsqueceuSenhaFormLogin', 'color', 'rgb(28, 30, 33)')
    },
    'Cenário 3: Deve inserir os dados de email/telefone invalido  “!@#$%” e clicar em entrar;': function (browser) {
        browser.page.loginPage.loginPage().emailTelefoneInvalido()
            .waitForElementVisible('@formLoginTelefoneSpanEntrar', 20000)
            .assert.attributeContains('@imageLogin', 'src', data.urls.urlImageFacebook)
            .assert.containsText('@formLoginTelefoneSpanEntrar', 'Entrar no Facebook')
            .assert.containsText('@inputEmailNumber', "")
            .assert.containsText('@inputPassword', "")
            .assert.cssProperty('@alertEmailLogin', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLogin', 'O email ou o número de celular que você inseriu não está conectado a uma conta.')
            .assert.cssProperty('@alertEmailLoginLink', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLogin', 'Crie uma nova conta do Facebook.')
            .assert.elementPresent('@buttonEntrar')
            .assert.elementPresent('@buttonContaGoogle')
            .assert.containsText('@linkEsqueceuSenhaFormLogin', 'Esqueceu a senha?')
            .assert.cssProperty('@linkEsqueceuSenhaFormLogin', 'color', 'rgb(28, 30, 33)')

    },
    'Cenário 4: Deve inserir os dados de senha inválida “teste” e clicar em entrar;': function (browser) {
        browser.page.loginPage.loginPage().senhaInvalida()
            .waitForElementVisible('@formLoginTelefoneSpanEntrar', 20000)
            .assert.attributeContains('@imageLogin', 'src', data.urls.urlImageFacebook)
            .assert.containsText('@formLoginTelefoneSpanEntrar', 'Entrar no Facebook')
            .assert.containsText('@inputEmailNumber', "")
            .assert.containsText('@inputPassword', "")
            .assert.cssProperty('@alertEmailLogin', 'color', 'rgb(240, 40, 73)')
            .assert.containsText('@alertEmailLogin', 'O email ou o número de celular que você inseriu não está conectado a uma conta.')
            .assert.cssProperty('@alertEmailLoginLink', 'color', 'rgb(240, 40, 73)')
            .assert.attributeContains('@alertEmailLoginLink', 'href', data.urls.urlEncontreSuaConta)
            .assert.elementPresent('@buttonEntrar')
            .assert.elementPresent('@buttonContaGoogle')
            .assert.containsText('@linkEsqueceuSenhaFormLogin', 'Esqueceu a senha?')
            .assert.cssProperty('@linkEsqueceuSenhaFormLogin', 'color', 'rgb(28, 30, 33)')
    },
    after: function (browser) {
        browser.end
    },

}