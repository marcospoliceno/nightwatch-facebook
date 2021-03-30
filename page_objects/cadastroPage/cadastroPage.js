const data = require('../../data/globalData');
module.exports = {
    commands: {
        criarNovaContaDialog: function () {
            return this.pause(100)
                .waitForElementVisible('@buttonCriarNovaConta', 5000)
                .click('@buttonCriarNovaConta')
                .waitForElementVisible('@titleDialogCriarConta', 5000)
        },
    },
    elements: {
        buttonCriarNovaConta: '[data-testid="open-registration-form-button"]',
        titleDialogCriarConta: { locateStrategy: 'xpath', selector: '//*[@id="facebook"]/body/div[3]/div[2]/div/div/div[1]/div[1]'},
        subTitle: { locateStrategy: 'xpath', selector: '//*[@id="facebook"]/body/div[3]/div[2]/div/div/div[1]/div[2]'},

        

    },
    url: data.urls.urlFacebook
}


