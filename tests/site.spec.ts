import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const locales = [
  { code: 'sk', heading: 'Od výkresu.', language: 'English' },
  { code: 'en', heading: 'From drawing.', language: 'Deutsch' },
  { code: 'de', heading: 'Vom Entwurf.', language: 'Slovenčina' },
];

for (const locale of locales) {
  test(`${locale.code}: localized, accessible and self-contained`, async ({ page }) => {
    await page.goto(`${locale.code}/`);
    await expect(page.locator('html')).toHaveAttribute('lang', locale.code);
    await expect(page.locator('h1')).toContainText(locale.heading);
    await page.locator('.header-contact').click();
    await expect(page.locator('#contact a[href="mailto:lago@lago.sk"]')).toBeVisible();
    await expect(page.locator('#contact a[href="tel:+421415582030"]')).toBeVisible();
    await page.evaluate(async () => {
      await Promise.all([...document.images].map(image => image.decode()));
    });
    const brokenLinks = await page.locator('a[href^="#"]').evaluateAll(links =>
      links.filter(link => !document.getElementById(link.getAttribute('href')!.slice(1))).map(link => link.getAttribute('href')),
    );
    expect(brokenLinks).toEqual([]);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
    await page.getByRole('link', { name: locale.language, exact: true }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('html')).not.toHaveAttribute('lang', locale.code);
  });
}

test('service details, focus restoration and technology disclosure work', async ({ page }) => {
  await page.goto('en/');
  const trigger = page.getByRole('button', { name: 'Explore capabilities — Tools & moulds' });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('aluminium');
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole('dialog').getByRole('link', { name: 'Let’s work together' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page).toHaveURL(/#contact$/);
  const details = page.locator('details').nth(1);
  await details.locator('summary').click();
  await expect(details).toHaveAttribute('open', '');
  await expect(details).toContainText('5,000 kg');
});

test('mobile navigation, language switching and layout', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('sk/');
  const toggle = page.getByRole('button', { name: 'Menu', exact: true });
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.locator('#mobile-nav').getByRole('link', { name: 'Technológie', exact: true }).click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#mobile-nav')).toBeHidden();
  await page.getByRole('link', { name: 'Deutsch', exact: true }).click();
  await expect(page).toHaveURL(/de\/#technology$/);
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('body *')].filter(element => {
        const bounds = element.getBoundingClientRect();
        return bounds.width > 0 && (bounds.right > innerWidth + 1 || bounds.left < -1);
      }).map(element => `${element.tagName}.${element.className}`),
    }));
    expect(overflow.scrollWidth, JSON.stringify(overflow)).toBeLessThanOrEqual(width);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations).toEqual([]);
});

test('engineering hover effects also respond to focus and respect reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('en/');
  const card = page.locator('.service-card').first();
  await card.scrollIntoViewIfNeeded();
  const restingTop = await card.evaluate(element => element.getBoundingClientRect().top);
  await card.hover();
  await expect.poll(() => card.evaluate(element => element.getBoundingClientRect().top)).toBeLessThan(restingTop - 6);
  await page.mouse.move(0, 0);
  await card.getByRole('button').focus();
  await expect.poll(() => card.evaluate(element => element.getBoundingClientRect().top)).toBeLessThan(restingTop - 6);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(() => card.evaluate(element => getComputedStyle(element).transform)).toBe('none');
  await expect(page.locator('.drawing-board')).toBeVisible();
  expect(await page.locator('.hero-visual .drawing-part').evaluate(element => getComputedStyle(element).animationName)).toBe('none');
});
