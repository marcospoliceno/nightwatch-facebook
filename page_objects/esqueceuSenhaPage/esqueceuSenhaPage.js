const data = require('../../data/globalData');
module.exports = {
    commands: {
        paginaEsqueceuSenha: function () {
            return this.pause(100)
                .waitForElementVisible('@linkEsqueceuSenha', 5000)
                .click('@linkEsqueceuSenha')
                .waitForElementVisible('@titleEncontreSuaConta', 5000)
        },
    },
    elements: {
        linkEsqueceuSenha: '._6ltj > a',
        titleEncontreSuaConta: { locateStrategy: 'xpath', selector: '//*[@id="identify_yourself_flow"]/div/div[1]/div/div[2]/h2' },
        subTitle: { locateStrategy: 'xpath', selector: '//*[@id="identify_yourself_flow"]/div/div[2]/div/table/tbody/tr[1]/td[2]/div' },
        inputEmailCelular: '#identify_email',
        buttonCancelar: { locateStrategy: 'xpath', selector: '//*[@id="identify_yourself_flow"]/div/div[3]/div/div[1]/a' },
        buttonPesquisar: '#did_submit',

    },
    url: data.urls.urlFacebook
}


