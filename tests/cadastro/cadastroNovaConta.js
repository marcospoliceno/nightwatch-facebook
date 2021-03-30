/*Resultados: Ao realizar a ação deve permanecer na tela de login e abrir uma outra tela em formato ‘dialog’ com um formulário de cadastro padrão;*/
module.exports = {

    '@tags': ['criar-conta'],

    before: function (browser) {
        browser.page.loginPage.loginPage().navigate()
    },
    'Deve estar na página de login e clicar no botão ‘Criar nova conta’': function (browser) {
        browser.page.cadastroPage.cadastroPage().criarNovaContaDialog()
            .assert.containsText('@titleDialogCriarConta', 'Cadastre-se')
            .assert.containsText('@subTitle', 'É rápido e fácil.')
    },
    after: function (browser) {
        browser.end
    },

}
