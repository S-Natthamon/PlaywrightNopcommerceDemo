import {test, expect} from '@playwright/test'

test("Login Test Saucedemo", async ({page})  => {

    await page.goto("https://www.saucedemo.com/")
    await page.fill('id=user-name', 'standard_user')
    await page.fill('id=password',  'secret_sauce')
    await page.click('text=Login')
    await page.click('id=react-burger-menu-btn')
    await page.click('id=logout_sidebar_link')
    await page.waitForTimeout(5000)
})
