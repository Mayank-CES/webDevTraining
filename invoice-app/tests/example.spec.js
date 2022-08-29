// @ts-check
import { test, expect } from '@playwright/test';

const testDataCustomers=[{id:1, name:"Mayank",phone:"9876543210",email:"mayank@gmail.com"}
,{id:2, name:"Pulkit",phone:"9876556789",email:"pulkit@gmail.com"}
,{id:3, name:"Anup",phone:"0123456789",email:"anup@gmail.com"}];

const testDataItems = [{id: 1, name: 'Computer', description: 'Powerful desktop setup', price: 69999, addedOn: '20 Jan 1970'},
{id: 2, name: 'Phone', description: 'Connect with others.', price: 9999, addedOn: '20 Jan 1970'},
{id: 3, name: 'OLED TV', description: 'Bring Home A Cinematic Experience Like Never Before', price: 99999, addedOn: '20 Jan 1970'},
{id: 4, name: 'Monitor', description: 'Display to increase productivity as well as consume OTT content.', price: 29999, addedOn: '17 Aug 2022'},
{id: 5, name: 'SDD', description: 'High speed "On The Go" Data backup.', price: 15000, addedOn: '17 Aug 2022'},
{id: 6, name: 'Earbuds', description: 'Listen to music completely handsfree', price: 5999, addedOn: '17 Aug 2022'}]

const baseURL="http://localhost:8080/Home/items"


test.describe('Item Flow Tests', () => {

  test.only('Item Flow Test', async ({ page }) => {
    await page.route(baseURL, route => route.fulfill({
      status: 200,
      body: JSON.stringify(testDataItems)
    }));

    // Go to http://localhost:3000/
    await page.goto('http://localhost:3000/');
    // Click div:has-text("Items") >> nth=3
    await page.locator('div:has-text("Items")').nth(3).click();
    await expect(page).toHaveURL('http://localhost:3000/view-item');
    // Click [placeholder="Category"]
    await page.locator('[placeholder="Category"]').click();
    // Click text=Name >> nth=0
    await page.locator('text=Name').first().click();
    // Click [data-testid="search-input"]
    await page.locator('[data-testid="search-input"]').click();
    // Fill [data-testid="search-input"]
    await page.locator('[data-testid="search-input"]').fill('monitor');
    // Click text=New Item
    await page.locator('text=New Item').click();
    await expect(page).toHaveURL('http://localhost:3000/add-item');
    // Click [placeholder="Name"]
    await page.locator('[placeholder="Name"]').click();
    // Fill [placeholder="Name"]
    await page.locator('[placeholder="Name"]').fill('Keyboard');
    // Click [placeholder="Description"]
    await page.locator('[placeholder="Description"]').click();
    // Fill [placeholder="Description"]
    await page.locator('[placeholder="Description"]').fill('write content with ease.');
    // Click [placeholder="\39 0"]
    await page.locator('[placeholder="\\39 0"]').click();
    // Fill [placeholder="\39 0"]
    await page.locator('[placeholder="\\39 0"]').fill('1999');
    // Click text=Save Item
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    
    await page.locator('text=Save Item').click();
    // Click div:has-text("Items") >> nth=3
    await page.locator('div:has-text("Items")').nth(3).click();
    await expect(page).toHaveURL('http://localhost:3000/view-item');
    // Click [data-testid="next-page"] svg
    await page.locator('[data-testid="next-page"] svg').click();
  });
});

// test.describe('Customer Flow Tests', () => {
//   test('Customer Flow test', async ({ page }) => {
      
//     // const response = await request.get({baseURL}), route => route.fulfill({
//     //   status: 200,
//     //   body.value: testData,

//     // }));
//     // Go to http://localhost:3000/
//     await page.goto('http://localhost:3000/');
//     // Click p:has-text("Customers")
//     await page.locator('p:has-text("Customers")').click();
//     await expect(page).toHaveURL('http://localhost:3000/view-customer');
//     // Click text=New Customer
//     await page.locator('text=New Customer').click();
//     await expect(page).toHaveURL('http://localhost:3000/add-customer');
//     // Click [placeholder="Name"]
//     await page.locator('[placeholder="Name"]').click();
//     // Fill [placeholder="Name"]
//     await page.locator('[placeholder="Name"]').fill('Kashi Roy');
//     // Click [placeholder="\39 090909090"]
//     await page.locator('[placeholder="\\39 090909090"]').click();
//     // Fill [placeholder="\39 090909090"]
//     await page.locator('[placeholder="\\39 090909090"]').fill('6543211234');
//     // Click [placeholder="Email"]
//     await page.locator('[placeholder="Email"]').click();
//     // Fill [placeholder="Email"]
//     await page.locator('[placeholder="Email"]').fill('kashi@gmail.com');
//     // Click text=Save Customer
//     await page.locator('text=Save Customer').click();
//   });
// });