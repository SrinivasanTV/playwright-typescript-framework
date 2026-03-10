import {test, expect} from '@playwright/test';

test('Basic API test - Get inventory', async ({request}) => {
    const response = await request.get('https://www.saucedemo.com/inventory.html');
    expect(response.status()).toBe(200);
    
})