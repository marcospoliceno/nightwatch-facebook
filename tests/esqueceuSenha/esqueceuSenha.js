/*Cenário 1:  Deve estar na página de login e clicar no link ‘Esqueceu a senha’
Resultados: Ao realizar a ação deve ser direcionado para página com opção de inserir email ou telefone com ação de pesquisar ou cancelar;*/
module.exports = {

    '@tags': ['esqueceu-senha'],

    before: function (browser) {
        browser.page.loginPage.loginPage().navigate()
    },
    'Deve estar na página de login e clicar no link Esqueceu a senha': function (browser) {
        browser.page.esqueceuSenhaPage.esqueceuSenhaPage().paginaEsqueceuSenha()
            .assert.containsText('@titleEncontreSuaConta', 'Encontre sua conta')
            .assert.containsText('@subTitle', 'Insira seu email ou telefone para procurar sua conta.')
            .assert.containsText('@inputEmailCelular', "")
            .assert.attributeContains('@inputEmailCelular', 'placeholder', 'Número de celular')
            .assert.visible('@buttonCancelar')
            .assert.visible('@buttonPesquisar')
    },
    after: function (browser) {
        browser.end
    },

}
