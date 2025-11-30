
export class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async findElement(selector) {
    try {
      return await this.driver.$(selector);
    } catch (error) {
      console.error(`❌ Erro ao encontrar elemento com seletor: ${selector}`);
      throw error;
    }
  }

  async click(selector) {
    const element = await this.findElement(selector);
    await element.click();
  }

  async getText(selector) {
    const element = await this.findElement(selector);
    return await element.getText();
  }

  async isDisplayed(selector) {
    const element = await this.findElement(selector);
    return await element.isDisplayed();
  }

  async isEnabled(selector) {
    const element = await this.findElement(selector);
    return await element.isEnabled();
  }

  async pause(ms) {
    await this.driver.pause(ms);
  }
}
