const selenium = require("selenium-webdriver");
(async function () {
  const driver = await new selenium.Builder()
    .forBrowser(selenium.Browser.CHROME)
    .build();

  await driver.get("http://127.0.0.1:5500/pages/form-login/index.html");

  let username = await driver.findElement(selenium.By.id("username"));
  let pwd = await driver.findElement(selenium.By.id("pwd"));
  let confirmPwd = await driver.findElement(selenium.By.id("confirm-pwd"));

  await username.sendKeys("aaa");
  await pwd.sendKeys("asenha");
  await confirmPwd.sendKeys("asenha123");

  let loginBtn = await driver.findElement(selenium.By.id("login-btn"));

  await loginBtn.click();

  //setTimeout(()=> driver.quit(), 1000);
})();
