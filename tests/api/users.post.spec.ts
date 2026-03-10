import {test, expect} from '@playwright/test';

test('Post create user', async({request}) => {
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Srinivasan',
                job: 'QA Engineer'
            }
        }
    );
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe('Srinivasan');
    expect(body.job).toBe('QA Engineer');
    expect(body.id).toBeDefined();
});