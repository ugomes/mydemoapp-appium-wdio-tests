
import { BasePage } from './BasePage.js';

export class ProductPage extends BasePage {
  // ============ SELECTORS ============
  get selectors() {
    return {
      title: 'accessibility id:title',
      product: '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)',
      productName: 'id:com.saucelabs.mydemoapp.android:id/productTV',
      price: 'id:com.saucelabs.mydemoapp.android:id/priceTV',
      addToCart: 'accessibility id:Tap to add product to cart',
      cartIcon: 'id:com.saucelabs.mydemoapp.android:id/cartTV'
    };
  }


  async clickTitle() {
    await this.click(this.selectors.title);
    await this.pause(500);
  }

  async clickProduct() {
    await this.click(this.selectors.product);
    await this.pause(500);
  }

  async clickProductName() {
    await this.click(this.selectors.productName);
    await this.pause(500);
  }

  async getProductName() {
    return await this.getText(this.selectors.productName);
  }

  async clickPrice() {
    await this.click(this.selectors.price);
    await this.pause(500);
  }

  async getPrice() {
    return await this.getText(this.selectors.price);
  }

  async scrollDown() {
    const initialY = 1800;
    await this.driver.action('pointer')
      .move({ duration: 0, x: 477, y: initialY })
      .down({ button: 0 })
      .pause(50)
      .up({ button: 0 })
      .perform();
    await this.pause(500);
  }

  async clickAddToCart() {
    await this.click(this.selectors.addToCart);
    await this.pause(500);
  }

  async clickCartIcon() {
    await this.click(this.selectors.cartIcon);
    await this.pause(500);
  }

  
  async isTitleDisplayed() {
    return await this.isDisplayed(this.selectors.title);
  }

  async isProductDisplayed() {
    return await this.isDisplayed(this.selectors.product);
  }

  async isProductNameDisplayed() {
    return await this.isDisplayed(this.selectors.productName);
  }

  async isPriceDisplayed() {
    return await this.isDisplayed(this.selectors.price);
  }

  async isAddToCartDisplayed() {
    return await this.isDisplayed(this.selectors.addToCart);
  }

  async isAddToCartEnabled() {
    return await this.isEnabled(this.selectors.addToCart);
  }

  async isCartIconDisplayed() {
    return await this.isDisplayed(this.selectors.cartIcon);
  }

  async isCartIconEnabled() {
    return await this.isEnabled(this.selectors.cartIcon);
  }
}
