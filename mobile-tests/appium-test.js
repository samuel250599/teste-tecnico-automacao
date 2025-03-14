const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:appPackage': 'com.example',
  'appium:appActivity': '.MainActivity',
  'appium:automationName': 'UiAutomator2'
};

async function runTest() {
  const driver = await remote({
    protocol: 'http',
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    capabilities
  });

  try {
    await driver.$('~username').setValue('testuser');
    await driver.$('~password').setValue('password123');
    await driver.$('~login').click();
    const success = await driver.$('~welcome').getText();
    console.log('Login success:', success);
  } finally {
    await driver.deleteSession();
  }
}

runTest().catch(console.error);