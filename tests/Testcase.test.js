import {test, expect} from '@playwright/test'


test("Register Web demo.nopcommerce", async ({page})  => {

    await page.goto("https://demo.nopcommerce.com/")
    await page.getByRole('listitem').filter({ hasText: 'Register' }).click();
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await page.waitForTimeout(3000)

    // Register
    await page.locator("//input[@id='gender-female']").click()
    await page.locator('id=FirstName').fill('Beer')
    await page.locator('id=LastName').fill('Suwan')
    await page.locator("//select[@name='DateOfBirthDay']").selectOption({value:'6'});
    await page.locator("//select[@name='DateOfBirthMonth']").selectOption('November');
    await page.locator("//select[@name='DateOfBirthYear']").selectOption('1990');
    await page.locator('id=Email').fill('suwann.beer06@gmail.com')
    await page.locator('id=Company').fill('Testdemo co.th')
    await page.locator("//input[@id='Newsletter' and @type='checkbox']").check()
    await page.locator('id=Password').fill('123456')
    await page.locator('id=ConfirmPassword').fill('123456')
    await page.locator('//*[@id="register-button"]').click()
    await page.waitForTimeout(3000)

    await page.locator('div').filter({ hasText: "Your registration completed" }).first().isVisible()   
    await page.locator('//div[@class="buttons"]').click()
    await page.waitForTimeout(3000)

})

test("Login Web demo.nopcommerce", async ({page})    => {

    await page.goto("https://demo.nopcommerce.com/")
    await page.getByRole('listitem').filter({ hasText: 'Log in' }).click();
    // Login
    await page.locator('id=Email').fill('suwann.beer06@gmail.com')
    await page.locator('id=Password').fill('123456')   
    await page.click('text=Log in')
    await page.locator('h2').filter({ hasText: "Welcome to our store" }).first().isVisible()
    await page.waitForTimeout(3000)
})