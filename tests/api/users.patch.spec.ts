import { test, expect } from '@playwright/test';

test('PATCH update user job only', async ({ request }) => {

  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        job: 'Lead QA'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.job).toBe('Lead QA');
});
