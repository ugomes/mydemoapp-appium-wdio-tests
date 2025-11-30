
export const config = {
  runner: 'local',
  port: 4723,
  specs: ['./tests/specs/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [{
    'platformName': 'Android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'emulator-5554',
    'appium:appPackage': 'com.saucelabs.mydemoapp.android',
    'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
    'appium:automationName': 'UiAutomator2',
    'appium:autoGrantPermissions': true,
    'appium:ensureWebviewsHavePages': false,
    'appium:nativeWebScreenshot': true,
    'appium:newCommandTimeout': 3600,
    'appium:uiautomator2ServerInstallTimeout': 60000,
    'appium:uiautomator2ServerLaunchTimeout': 60000,
    'appium:systemPort': 8200,
    'appium:skipLogcatCapture': false,
  }],
  framework: 'mocha',
  mochaOpts: {
    timeout: 120000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports',
      reportFilename: 'report'
    }
  },
  connectionRetryCount: 3,
  connectionRetryTimeout: 30000,
  webSocketUrl: false,
  strictSSL: false,
};
