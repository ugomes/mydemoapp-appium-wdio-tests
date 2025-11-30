
export const APPIUM_CONFIG = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',
  strictSSL: false,
  webSocketUrl: false
};

export const CAPABILITIES = {
  'platformName': 'Android',
  'appium:platformVersion': '13.0',
  'appium:deviceName': 'emulator5554',
  'appium:deviceOrientation': 'portrait',
  'appium:appPackage': 'com.saucelabs.mydemoapp.android',
  'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
  'appium:automationName': 'UiAutomator2',
  'appium:ensureWebviewsHavePages': true,
  'appium:nativeWebScreenshot': true,
  'appium:newCommandTimeout': 3600,
  'appium:connectHardwareKeyboard': true
};
