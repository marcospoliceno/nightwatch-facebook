const data = require('../../data/globalData')

/*Resultados: Ao realizar a ação de entrar deve ser direcionado para a página inicial, exibindo ao canto superior direito o botão de Conta com todas 
as funcionalidades de usuário logado e opção de sair;*/
module.exports = {

    '@tags': ['login-em-branco'],

    before: function (browser) {
        browser.page.loginPage.login().navigate()
    },
    'Deve estar na página de login, verificar os campos email/telefone e senha se estão em branco e clicar em entrar': function (browser) {
        browser.page.loginPage.login().acessoEmBranco()
            .waitForElementVisible('@imageLogin', 5000)
            .assert.containsText('@inputEmailNumber', "")
            .assert.containsText('@inputPassword', "")
            .assert.attributeContains('@imageLogin', 'src', data.urls.urlImageFacebook)
            .assert.containsText('@alertEmailLogin', 'O email ou o número de celular que você inseriu não está conectado a uma conta')
            .assert.cssProperty('@alertEmailLogin', 'color', 'rgb(240, 40, 73)')
            .assert.attributeContains('@alertEmailLoginLink', 'href', data.urls.urlEncontreSuaConta)
            .assert.containsText('@alertEmailLogin', 'Encontre sua conta e entre.')
            .assert.cssProperty('@alertEmailLoginLink', 'color', 'rgb(240, 40, 73)')
    },
    after: function (browser) {
        browser.end
    },

}
