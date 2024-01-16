import { fixture, t, test } from 'testcafe';
import TestMethods from './Saucedemo';

fixture('Example Test')
    .page('https://www.saucedemo.com/')

    // .beforeEach(async t => {
    //     status = await testMethods.performLogin ();
   //        await t.expect (status).ok ();
    // })

    // .afterEach(async t => {
    //     await testMethods.takeScreenshots ();
    // });


let testMethods = new TestMethods();


// test('Add to cart and remove the item successfully', async () => {
//     await testMethods.addToCartAndRemoveItem ();
// });
// test('Perform click actions', async () => {
//     await testMethods.performClickActions ();
// });
// test('Check the element', async () => {
//     await testMethods.checkElement ();
// });



let status: boolean = false;


// test('Perform End-to-End Flow', async () => {
//     await testMethods.performLogin ();
//     status = await testMethods.addToCartAndRemoveItem ();
//     await t.expect (status).ok ();
//     await testMethods.performClickActions ();
//     await testMethods.checkElement ();
//     await testMethods.takeScreenshots ();
// });




test.before(async () => {
    await testMethods.performLogin ();
})('Add to cart and remove the item successfully', async () => {
    status = await testMethods.addToCartAndRemoveItem ();
    await t.expect (status).ok ();
});

test('Perform click actions', async () => {
   status = await testMethods.performClickActions ();
   await t.expect (status).ok ();
   
});

test.after(async () => {
    await testMethods.takeScreenshots ();
})('Check the element', async () => {
   status = await testMethods.checkElement ();
   await t.expect (status).ok ();
});

// test('Check the element', async () => {
//     await testMethods.checkElement();
// });
// test('Take Screenshots', async () => {
//     await testMethods.takeScreenshots();
// });





//


// test('Perform click actions', async () => {
//     await testMethods.performClickActions();
// });


// test


// test ('Takes screenshort', async () =>{
//
// })