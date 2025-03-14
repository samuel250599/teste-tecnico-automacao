const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {
  test('GET Posts', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);
    expect(await response.json()).toContainEqual(expect.objectContaining({
      userId: 1,
      id: 1,
      title: expect.any(String),
    }));
  });

  test('POST Post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    });
    expect(response.status()).toBe(201);
    expect(await response.json()).toHaveProperty('id', 101);
  });
});