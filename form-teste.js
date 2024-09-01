const selenium = require("selenium-webdriver");
(
async function(){
  const driver = await new selenium.Builder().forBrowser(selenium.Browser.CHROME).build();

  await driver.get('http://localhost:3000/Cadastrar');

  let firstName = await driver.findElement(selenium.By.id("nome"));
  let surname = await driver.findElement(selenium.By.id("sobrenome"));
  let cpf = await driver.findElement(selenium.By.id("cpf"));
  let password = await driver.findElement(selenium.By.id("senha"));

  await firstName.sendKeys("Micagou");
  await surname.sendKeys("Alves");
  await cpf.sendKeys("11111111111") 
  await password.sendKeys("password12342");

  let saveBtn = await driver.findElement(selenium.By.xpath("/html/body/div[1]/div/div[2]/button[2]"));

  await saveBtn.click();


  //setTimeout(()=> driver.quit(), 1000);
})();