const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  let siteURL = 'https://chromedriver.chromium.org/'
  await driver.get(siteURL);


  async function getPageTitle() {
    const titleElement = await driver.findElement(By.className('Rn3Z1b'));
    const titleText = await titleElement.getText();
    console.log(titleText);
  }

  getPageTitle();
  const headerMenuOptions = await driver.findElements(By.className('aJHbb dk90Ob jgXgSe HlqNPb'));

  driver.manage().window().maximize()
  const text3 = await headerMenuOptions[2].getText();
  await headerMenuOptions[2].click();
  getPageTitle();

  // const headerItems = await driver.findElement(By.css('.navbar-collapse .nav-link'));
  // const aaa = headerItems.getText();
  // console.log(aaa);
  // await headerItems[2].click();
  // await driver.sleep(5000);

  // const title2 = await driver.findElement(By.css('.td-content>h1'));
  // const text2 = await title2.getText();
  // console.log(text2);
  await driver.sleep(2000);
  await driver.quit();
  //   try {
  //     await driver.get('http://www.google.com/ncr');
  //     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
  //     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  //   } finally {
  //     await driver.quit();
  //   }
})();