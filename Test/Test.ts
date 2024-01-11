import { fixture, t, test } from 'testcafe';
import TestMethods from './Saucedemo';

fixture('Example Test')
    .page('https://www.saucedemo.com/');


let testMethods = new TestMethods();

let status: boolean = false;


test('Perform End-to-End Flow', async () => {
    await testMethods.performLogin();
    status = await testMethods.addToCartAndRemoveItem();
    await t.expect (status).ok ();
    await testMethods.performClickActions();
    await testMethods.checkElement();
    await testMethods.takeScreenshots();
});


// test.before (async () => {
//     await testMethods.performLogin();
// })('Add to cart and remove the item successfully', async () => {
//     await testMethods.addToCartAndRemoveItem();
// });

// test.after (async () => {
//     await testMethods.checkElement();
// }) ('Take Screenshots', async () => {
//     await testMethods.takeScreenshots();
// });

// test('Perform click actions', async () => {
//     await testMethods.performClickActions();
// });

// test('Check the element', async () => {
    
// });

