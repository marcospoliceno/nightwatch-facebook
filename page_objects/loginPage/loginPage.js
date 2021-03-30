const data = require('../../data/globalData');
module.exports = {
    commands: {
        acessoValidoFacebook: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .waitForElementVisible('@inputPassword', 5000)
                .setValue('@inputEmailNumber', data.login.user)
                .setValue('@inputPassword', data.login.pass)
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        },
        acessoEmBranco: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .waitForElementVisible('@inputPassword', 5000)
                .setValue('@inputEmailNumber', "")
                .setValue('@inputPassword', "")
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        },
        emailValido: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .setValue('@inputEmailNumber', "marcostestvizir@gmail.com")
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        },
        telefoneValido: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .setValue('@inputEmailNumber', '4949494949')
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        },
        emailTelefoneInvalido: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .setValue('@inputEmailNumber', '!@#$%')
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        },
        senhaInvalida: function () {
            return this.pause(100)
                .waitForElementVisible('@inputPassword', 5000)
                .setValue('@inputPassword', 'teste')
                .waitForElementVisible('@buttonEntrar', 1000)
                .click('@buttonEntrar')
        }
    },
    elements: {
        imageLogo: '#content img',
        titleMessage: '#content h2',
        inputEmailNumber: '#email',
        inputPassword: '#pass',
        buttonEntrar: '[type="submit"]',
        buttonCriarNovaConta: '[data-testid="open-registration-form-button"]',
        linkEsqueceuSenha: '._6ltj > a',
        linkCriarPagina: '#reg_pages_msg a',
        messageCriarPagina: '#reg_pages_msg',
        listIdiomas: '#pageFooter .uiList',
        listIdiomasIngles: "#pageFooter > ul > li:nth-child(2) a",
        listIdiomasEspanhol: "#pageFooter > ul > li:nth-child(3) a",
        listIdiomasFrances: "#pageFooter > ul > li:nth-child(4) a",
        listIdiomasItaliano: "#pageFooter > ul > li:nth-child(5) a",
        listIdiomasArabe: "#pageFooter > ul > li:nth-child(6) a",
        listIdiomasAlemao: "#pageFooter > ul > li:nth-child(7) a",
        listIdiomasIndiano: "#pageFooter > ul > li:nth-child(8) a",
        listIdiomasChines: "#pageFooter > ul > li:nth-child(9) a",
        listIdiomasJapones: "#pageFooter > ul > li:nth-child(10) a",
        buttonAdicionarIdiomas: { locateStrategy: 'xpath', selector: '//*[@id="pageFooter"]/ul/li[11]/a' },
        spanBemVindo: "[role='main'] span",
        buttonConta: "[aria-label='Conta']",
        imageLogin: '[alt="Facebook"]',
        alertEmailLogin: "div._9ay7",
        alertEmailLoginLink: "div._9ay7 a",
        linkNaoEVoce: '#not_me_link',
        linkEsqueceuSenhaFormLogin: '#login_link',
        buttonContaGoogle: { locateStrategy: 'xpath', selector: '//*[@id="loginform"]/div[4]/div/a' },
        formLoginNameEnter: { locateStrategy: 'xpath', selector: '//*[@id="header_block"]/span/div/div[1]/div[2]/span' },
        formLoginEmail: { locateStrategy: 'xpath', selector: ' //*[@id="header_block"]/span/div/div[2]' },

        formLoginTelefoneSpanEntrar: { locateStrategy: 'xpath', selector: '//*[@id="header_block"]/span/div' },

        footerCadastrese: "#pageFooterChildren > ul > li:nth-child(1) > a",
        footerEntrar: "#pageFooterChildren > ul > li:nth-child(2) > a",
        footerMessenger: "#pageFooterChildren > ul > li:nth-child(3) > a",
        footerFacebookLite: "#pageFooterChildren > ul > li:nth-child(4) > a",
        footerAssistir: "#pageFooterChildren > ul > li:nth-child(5) > a",
        footerPessoas: "#pageFooterChildren > ul > li:nth-child(6) > a",
        footerPaginas: "#pageFooterChildren > ul > li:nth-child(7) > a",
        footerCategoriaPaginas: "#pageFooterChildren > ul > li:nth-child(8) > a",
        footerLocais1: "#pageFooterChildren > ul > li:nth-child(9) > a",
        footerJogos: "#pageFooterChildren > ul > li:nth-child(10) > a",
        footerLocais: "#pageFooterChildren > ul > li:nth-child(11) > a",
        footerMarketPlace: "#pageFooterChildren > ul > li:nth-child(12) > a",
        footerFacebookPay: "#pageFooterChildren > ul > li:nth-child(13) > a",
        footerGrupos: "#pageFooterChildren > ul > li:nth-child(14) > a",
        footerVagasEmprego: "#pageFooterChildren > ul > li:nth-child(15) > a",
        footerOcultus: "#pageFooterChildren > ul > li:nth-child(16) > a",
        footerPortal: "#pageFooterChildren > ul > li:nth-child(17) > a",
        footerInstagram: "#pageFooterChildren > ul > li:nth-child(18) > a",
        footerLocal: "#pageFooterChildren > ul > li:nth-child(19) > a",
        footerCampanhas: "#pageFooterChildren > ul > li:nth-child(20) > a",
        footerServicos: "#pageFooterChildren > ul > li:nth-child(21) > a",
        footerCentralInf: "#pageFooterChildren > ul > li:nth-child(22) > a",
        footerSobre: "#pageFooterChildren > ul > li:nth-child(23) > a",
        footerCriarAnuncios: "#pageFooterChildren > ul > li:nth-child(24) > a",
        footerCriarPagina: "#pageFooterChildren > ul > li:nth-child(25) > a",
        footerDesenvolvedores: "#pageFooterChildren > ul > li:nth-child(26) > a",
        footerCarreiras: "#pageFooterChildren > ul > li:nth-child(27) > a",
        footerPrivacidade: "#pageFooterChildren > ul > li:nth-child(28) > a",
        footerCookies: "#pageFooterChildren > ul > li:nth-child(29) > a",
        footerEscolhaAnuncios: "#pageFooterChildren > ul > li:nth-child(30) > a",
        footerTermos: "#pageFooterChildren > ul > li:nth-child(31) > a",
        footerAjuda: "#pageFooterChildren > ul > li:nth-child(32) > a",
        copyright: '.copyright'

    },
    url: data.urls.urlFacebook
}


