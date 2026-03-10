import { test, expect } from '@playwright/test';

test('DELETE user', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // jsonplaceholder returns 200 for DELETE
  expect(response.status()).toBe(200);

});
