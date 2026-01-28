import { env as dev } from '../config/dev.env';
import { env as qa } from '../config/qa.env';
import { env as prod } from '../config/prod.env';

export function getEnv() {
    const environment = process.env.TEST_ENV || 'dev';

    switch (environment) {
        case 'qa':
            return qa;
        case 'prod':
            return prod;
        default:
            return dev;
    }
}
