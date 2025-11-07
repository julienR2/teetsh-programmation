import { test, expect } from '@playwright/test'
import data from '../src/assets/data.json' with { type: 'json' }

test('is loading Programmation correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page.getByTestId('programmation-title')).toBeVisible()
})

test('Display 5 periods', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  for (const period of data.data.periodes) {
    await expect(page.getByTestId(`period-${period.id}`).locator('visible=true')).toBeVisible()
  }
})
