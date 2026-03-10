import { test, expect } from '@playwright/test';

test('PUT update user', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        name: 'Srinivasan',
        job: 'Senior QA'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.name).toBe('Srinivasan');
  expect(body.job).toBe('Senior QA');
});
