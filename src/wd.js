const {Builder, By} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.sleep(5000);
  await driver.quit();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
})();