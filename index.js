
const puppeteer = require('puppeteer');

(async () => {
  
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto("https://mail.google.com/mail/");

  await page.waitForTimeout(1000)
  await page.type('input[type="email"]', 'fortestingt80@gmail.com', { delay:100})
  await page.click('div[id="identifierNext"]')

  await page.waitForTimeout(3000); 
  await page.type('input[type="password"]', 'Qwerty@12345',{ delay:100}); 
  await page.click('div[id="passwordNext"]');

  await page.waitForNavigation();
 
  const unreadCount = await page.$eval('.bsU', (element) => {
  const text = element.textContent.trim();
  return text.match(/\d+/) ? parseInt(text.match(/\d+/)[0]) : 0;
});

console.log(`Кількість непрочитаних листів: ${unreadCount}`);

  

  await browser.close();
  
})();

// Qwerty@12345
// fortestingt80@gmail.com