import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  describe('Card form', () => {
    test('should add .invalid class for valid card', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget=card-form-widget]');
      const input = await form.$('[data-id=card-input]');
      await input.type('4556598950936035');
      const submit = await form.$('[data-id=card-submit]');
      await submit.click();
      await page.waitForSelector('[data-id=card-input].invalid', { hidden: true });
    });
    test('should add .valid class for valid card', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget=card-form-widget]');
      const input = await form.$('[data-id=card-input]');
      await input.type('4556598950936735');
      const submit = await form.$('[data-id=card-submit]');
      await submit.click();
      await page.waitForSelector('[data-id=card-input].valid', { hidden: true });
    });
  });
});
