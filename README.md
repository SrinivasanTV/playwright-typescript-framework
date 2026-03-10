# Playwright Framework Sample

A sample Playwright automation framework built for GitHub showcase purposes.

This repository demonstrates a clean starter structure for:
- UI test automation with Playwright
- basic API test coverage with Playwright's `request` fixture
- Page Object Model usage
- custom fixture usage
- environment-based configuration
- Allure reporting
- GitHub Actions execution

## Tech Stack

- TypeScript
- Playwright
- Allure Report
- GitHub Actions

## Project Structure

```text
framework/
|-- config/
|-- fixtures/
|-- pages/
|-- test-data/
|-- tests/
|   |-- api/
|   |-- auth/
|   |-- checkout/
|   |-- inventory/
|-- utils/
|-- playwright.config.ts
|-- package.json
```

## What This Sample Covers

### UI Automation

- login validation
- inventory verification
- checkout end-to-end flow

### API Automation

- GET
- POST
- PATCH
- PUT
- DELETE

### Framework Concepts

- reusable page classes
- shared login fixture
- environment switching using `TEST_ENV`
- screenshot attachment support
- Allure reporting setup

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
npm ci
npx playwright install
```

## Running Tests

Run the full suite:

```bash
npm test
```

Run a specific test file:

```bash
npx playwright test tests/inventory/inventory.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests for a specific browser:

```bash
npx playwright test --project=chromium
```

## Environment Selection

This project supports environment selection through the `TEST_ENV` variable.

Available environments:
- `dev`
- `qa`
- `prod`

Example:

```bash
$env:TEST_ENV="qa"
npx playwright test
```

Environment configuration files are located in:
- `config/dev.env.ts`
- `config/qa.env.ts`
- `config/prod.env.ts`

## Reporting

Generate the Allure report:

```bash
npm run allure:generate
```

Open the Allure report:

```bash
npm run allure:open
```

## CI

The repository includes a GitHub Actions workflow in:

- `.github/workflows/playwright.yml`

It installs dependencies, installs Playwright browsers, runs the test suite, and publishes the Allure report as a workflow artifact.

## Notes

- This is a sample framework intended for demonstration and learning.
- It is not positioned as a production-ready enterprise automation framework.
- The structure is intentionally simple so the core design is easy to understand.

## Next Improvements

Planned improvement areas for this sample:
- stronger README examples and badges
- storage-state based authentication
- test tagging and filtered execution scripts
- linting and formatting setup
- better separation of UI and API test concerns
- improved data modeling and config handling
