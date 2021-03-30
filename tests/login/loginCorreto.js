/*Resultados: Ao realizar a ação de entrar deve ser direcionado para a página inicial, exibindo ao canto superior direito o botão de Conta com todas 
as funcionalidades de usuário logado e opção de sair;*/
module.exports = {

    '@tags': ['login-correto'],

    before: function (browser) {
        browser.page.loginPage.login().navigate()
    },
    'Deve estar na página de login e inserir os dados válidos de email/telefone e senha e entrar': function (browser) {
        browser.page.loginPage.login().acessoValidoFacebook()
            .assert.containsText('@spanBemVindo', 'Bem-vindo ao Facebook, Marcos')
            .waitForElementVisible('@buttonConta', 1000)
    },
    after: function (browser) {
        browser.end
    },

}
