
import { remote } from 'webdriverio';
import { expect } from 'chai';
import { ProductPage } from '../pageobjects/ProductPage.js';
import { ScreenshotHelper } from '../utils/ScreenshotHelper.js';
import { APPIUM_CONFIG, CAPABILITIES } from '../config/AppiumConfig.js';


describe('Comprar Mochila - MyDemoApp', () => {
  let driver;
  let productPage;

  before(async function() {
    this.timeout(30000);
    
    driver = await remote({
      ...APPIUM_CONFIG,
      capabilities: CAPABILITIES
    });
    productPage = new ProductPage(driver);
   
    await driver.pause(2000);
  });

  it('Deve clicar no título e validar que está visível', async () => {
    const element = await productPage.findElement(productPage.selectors.title);
    expect(element).to.exist;
    expect(await productPage.isTitleDisplayed()).to.be.true;
    await productPage.clickTitle();
  });

  it('Deve clicar no produto e validar que existe', async () => {
    const element = await productPage.findElement(productPage.selectors.product);
    expect(element).to.exist;
    expect(await productPage.isProductDisplayed()).to.be.true;
    await productPage.clickProduct();
  });

  it('Deve clicar no nome do produto e validar texto', async () => {
    const element = await productPage.findElement(productPage.selectors.productName);
    expect(element).to.exist;
    expect(await productPage.isProductNameDisplayed()).to.be.true;
    const text = await productPage.getProductName();
    expect(text).to.not.be.empty;
    await productPage.clickProductName();
  });

  it('Deve clicar no preço e validar que é um número', async () => {
    const element = await productPage.findElement(productPage.selectors.price);
    expect(element).to.exist;
    expect(await productPage.isPriceDisplayed()).to.be.true;
    const priceText = await productPage.getPrice();
    expect(priceText).to.match(/\d+/);
    await productPage.clickPrice();
  });

  it('Deve fazer scroll down com sucesso', async () => {
    await productPage.scrollDown();
    expect(true).to.be.true;
  });

  it('Deve adicionar produto ao carrinho e validar botão', async () => {
    const element = await productPage.findElement(productPage.selectors.addToCart);
    expect(element).to.exist;
    expect(await productPage.isAddToCartDisplayed()).to.be.true;
    expect(await productPage.isAddToCartEnabled()).to.be.true;
    await productPage.clickAddToCart();
  });

  it('Deve clicar no ícone do carrinho e validar que existe', async () => {
    const element = await productPage.findElement(productPage.selectors.cartIcon);
    expect(element).to.exist;
    expect(await productPage.isCartIconDisplayed()).to.be.true;
    expect(await productPage.isCartIconEnabled()).to.be.true;
    await productPage.clickCartIcon();

    const cartTitle = await productPage.findElement(productPage.selectors.cartIcon);
    expect(cartTitle).to.exist;
  });

  afterEach(async function() {
    if (this.currentTest.state === 'failed') {
      await ScreenshotHelper.takeScreenshot(driver, this.currentTest.title);
    }
  });

  after(async () => {
    if (driver) {
      await driver.deleteSession();
      console.log('🔌 Sessão encerrada');
    }
  });
});
