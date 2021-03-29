const data = require('../../data/globalData');
module.exports = {
    commands: {
        pesquisaDesbravador: function () {
            return this.pause(100)
                .waitForElementPresent('@buttonPesquisa', 5000)
                .waitForElementPresent('@buttonEstouComSorte', 5000)
                .setValue('@inputPesquisar', 'desbravador software')
                .waitForElementVisible('@linkDenunciar', 2000)
                .click('@buttonPesquisa')
        },
        acessoSiteDesbravador: function () {
            return this.pause(100)
                .click('@buttonWebSiteDesbravador')
        },
        acessoValidoFacebook: function () {
            return this.pause(100)
                .waitForElementVisible('@inputEmailNumber', 5000)
                .waitForElementVisible('@inputPassword', 5000)
                .setValue('@inputEmailNumber', data.login.user)
                .setValue('@inputPassword', data.login.pass)
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
        // spanBemVindo: {locateStrategy: 'xpath', selector: '//*[@id="mount_0_0_vN"]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div/div[1]/span'},

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


