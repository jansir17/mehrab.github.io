const { test, expect } = require('@playwright/test');

const BASE_URL =
  process.env.BASE_URL || 'https://jansir17.github.io/mehrab.github.io/';

test('Home page loads and shows main heading', async ({ page }) => {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  // Very safe check: page has a title (update if you want exact title)
  await expect(page).toHaveTitle(/mehrab|portfolio|qa|sdet/i);

  // Look for a visible heading (h1/h2 etc.) by accessible role
  const heroName = page.locator('section.home div.content h3');

  await expect(heroName).toBeVisible();
  await expect(heroName).toHaveText('Mehrab Hossain — QA/SDET');

});