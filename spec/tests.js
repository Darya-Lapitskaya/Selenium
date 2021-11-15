const { Builder, By } = require('selenium-webdriver');
require('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("Tests with Selenium Web Driver", function () {
    let driver = null;

    async function waitTitle() {
        const titles = await driver.findElements(By.className('Rn3Z1b'));
        return !!titles.length;
    }

    async function getPageTitle() {
        const titleElement = await driver.findElement(By.className('Rn3Z1b'));
        const titleText = await titleElement.getText();
        return titleText;
    }

    async function checkPage(elemenToOpenPage, expectedURL, expectedPageTtl) {
        await elemenToOpenPage.click();
        await driver.wait(waitTitle, 5000);
        const pageURL = await driver.getCurrentUrl();
        const pageTtl = await getPageTitle();
        expect(pageURL).toBe(expectedURL);
        expect(pageTtl).toBe(expectedPageTtl);
    }

    beforeEach(async function () {

        driver = await new Builder().forBrowser('chrome').build();
        let siteURL = 'https://chromedriver.chromium.org/'
        await driver.get(siteURL);
        await driver.wait(waitTitle, 5000);
    })

    afterEach(async function () {
        await driver.quit();
    })


    it("Check main page header and header menu options list and color option", async function () {
        let pageTtl = await getPageTitle();
        expect(pageTtl).toBe('ChromeDriver');

        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        driver.manage().window().maximize();
        await driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", headerMenuOptions[11]);
        expect(await headerMenuOptions[0].getText()).toBe('ChromeDriver');
        expect(await headerMenuOptions[1].getText()).toBe('Capabilities & ChromeOptions');
        expect(await headerMenuOptions[2].getText()).toBe('Chrome Extensions');
        expect(await headerMenuOptions[3].getText()).toBe('ChromeDriver Canary');
        expect(await headerMenuOptions[4].getText()).toBe('Contributing');
        //TODO: complex (hidden menus, dropdowns);
        // expect(await headerMenuOptions[5].getText()).toBe('Capabilities & ChromeOptions');
        // expect(await headerMenuOptions[6].getText()).toBe('Capabilities & ChromeOptions');
        // expect(await headerMenuOptions[7].getText()).toBe('Capabilities & ChromeOptions');
        // expect(await headerMenuOptions[8].getText()).toBe('Capabilities & ChromeOptions');
        // expect(await headerMenuOptions[9].getText()).toBe('Capabilities & ChromeOptions');
        // expect(await headerMenuOptions[10].getText()).toBe('Capabilities & ChromeOptions');
        //expect(await headerMenuOptions[11].getText()).toBe('More');
    });


    it("Check ChromeDriver option", async function () {
        driver.manage().window().maximize();
        await driver.get('https://chromedriver.chromium.org/capabilities');
        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        await checkPage(headerMenuOptions[0], 'https://chromedriver.chromium.org/home', 'ChromeDriver');

    });

    it("Check Capabilities & ChromeOptions option", async function () {
        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        driver.manage().window().maximize();
        await checkPage(headerMenuOptions[1], 'https://chromedriver.chromium.org/capabilities', 'Capabilities & ChromeOptions');

    });

    it("Check Chrome Extensions option", async function () {
        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        driver.manage().window().maximize();
        await checkPage(headerMenuOptions[2], 'https://chromedriver.chromium.org/extensions', 'Chrome Extensions');

    });


    it("Check ChromeDriver Canary option", async function () {
        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        driver.manage().window().maximize();
        await checkPage(headerMenuOptions[3], 'https://chromedriver.chromium.org/chromedriver-canary', 'ChromeDriver Canary');

    });


    it("Check Capabilities & ChromeOptions option", async function () {
        const headerMenuOptions = await driver.findElements(By.className('PsKE7e qV4dIc Qrrb5 YSH9J'));
        driver.manage().window().maximize();
        await checkPage(headerMenuOptions[4], 'https://chromedriver.chromium.org/contributing', 'Contributing');

    });

});