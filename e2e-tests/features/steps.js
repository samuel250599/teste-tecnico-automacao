const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I navigate to login page', async function () {
  await this.page.goto('https://example.com/login');
});

When('I enter valid credentials', async function () {
  await this.page.fill('#username', 'testuser');
  await this.page.fill('#password', 'password123');
  await this.page.click('#login-btn');
});

Then('I should see dashboard', async function () {
  await this.page.waitForSelector('.dashboard');
  expect(await this.page.title()).toContain('Dashboard');
});