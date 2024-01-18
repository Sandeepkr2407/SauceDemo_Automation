import { Selector, t } from 'testcafe';
import logger from './Logger';


export class TestMethods {
    userName: string = 'standard_user';
    password: string = 'secret_sauce';

    async performLogin () {
        let uName: any;
        let pass: any;
        let submit: any;

        try {
            await t.maximizeWindow ();

            uName = Selector ('input[placeholder="Username"]');
            await t.typeText (uName, this.userName);

            pass = Selector ('input[placeholder="Password"]');
            await t.typeText (pass, this.password);

            submit = Selector ('[type="submit"]')
            await t.click (submit);

            
        }
        catch (error) 
        {
            logger.error ('Error during login' + error);
        }
    };

    async addToCartAndRemoveItem () {
        //await this.performLogin();
        let backPack: any;
        let addToCart: any;
        let goToCart: any;
        let cartItemCount: string;
        let removeFromCart: any;
        let cartTextAfterRemoval: string;
        let status: boolean = false;
        try {

            backPack = Selector ('a[id="item_4_title_link"] div[class="inventory_item_name "]');
            addToCart = Selector ('#add-to-cart-sauce-labs-backpack');

            if (await backPack.exists) 
            {
                logger.info ('BackPack is present');
                await t.click (backPack);

                if (await addToCart.exists) 
                {
                    logger.info ('Add to cart present');
                    await t.click (addToCart);

                    // Click on "Go to Cart" after adding the item to the cart
                    goToCart = Selector ('a[class="shopping_cart_link"]');
                    await t.click (goToCart);

                    // Assert to check if the item is added
                    cartItemCount = await Selector ('.shopping_cart_badge').innerText;
                    if (cartItemCount === '1')
                    {
                        logger.info ('Item added to the cart successfully');

                        status = true;
                        
                    } else 
                    {
                        logger.warn ('Item not added to the cart successfully');
                        
                    }

                    // Assert to check if the item is removed
                    removeFromCart = Selector ('button[id="remove-sauce-labs-backpack"]');
                    await t.click (removeFromCart);

                    await t.wait (2000);

                    cartTextAfterRemoval = await Selector ('a[class="shopping_cart_link"]').innerText;
                    if (cartTextAfterRemoval === '') 
                    {
                        logger.info ('Item removed from the cart successfully!');
                    } 
                    else 
                    {
                        logger.warn ('Item not removed from the cart');
                        
                    }
                } 
                else 
                {
                    logger.warn ('Add to cart is not present');  
                }
            } 
            else 
            {
                logger.warn ('Backpack is not present');
            }
        } catch (error) 
        {
            logger.error ('Error during addToCartAndRemoveItem ' + error);
        }

        return status;
    };
    
    async performClickActions () {
        await this.performLogin ();
        let continueShopping: any;
        let backPack1: any;
        let hoverMessage: string;
        let product: any;
        let isRightClickPerformed: any;
        let isDoubleClickPerformed: any;
        let status: boolean = false;

        try {
            // continueShopping = Selector('button[name="continue-shopping"]');
            // await t.click(continueShopping);

            backPack1 = Selector ('a[id="item_4_title_link"] div[class="inventory_item_name "]');
            product = Selector ('span[class="title"]');
            isRightClickPerformed = await t.rightClick (product);
            isDoubleClickPerformed = await t.doubleClick (product);

            if (await backPack1.exists) {
                logger.info ('Backpack1 is exist ');
                await t.hover (backPack1);
                hoverMessage = await backPack1.innerText;
                console.log (hoverMessage);

                if (await product.exists) {
                    logger.info ('Product is exist ')

                    if (isRightClickPerformed) {
                        logger.info ('Right click is performed ');
                        status = true;
                    }
                    else
                    {
                        logger.warn ('Right click is not performed ');
                    }
                    
                    await t.wait (2000);
                    
                    if (isDoubleClickPerformed) {
                        logger.info ('Double click is performed ');
                        status = true
                    }
                    else
                    {
                        logger.warn ('Double click is not performed ');
                    }   
                }
                else
                {
                    logger.warn ('Product is not exist ');
                }
            }
            else
            {
                logger.warn ('Backpack is not present ');
            }
            
        } catch (error) {
            logger.error ('Error during performClickActions ' + error);           
        }
        return status;
    };

    async checkElement () {
        await this.performLogin ();

        let product: any;
        let isProductExistandVisible: any;
        let status: boolean = false;

        try {
            product = Selector ('span[class="title"]');
            // Check the element is exist or not
            
            isProductExistandVisible = await product.exists && await product.visible;

            if (isProductExistandVisible){
                logger.info ('Product is exist and visible ');

                status = true;
            }
            else
            {
                logger.warn ('Product is not exist and not visible ');
            }

            
        } catch (error) {
            logger.error ('Error during checkElement ' + error);
        }
        return status;

    };

    async takeScreenshots () {
        //await this.performLogin();

        try {

            // Takes a screenshot of the entire page
            await t.takeScreenshot ('C:\\Users\\sande\\OneDrive\\Desktop\\Anvilogic_Task\\Screenshot.png');

            // Takes a screenshot of the specified element
           // await t.takeElementScreenshot (Selector('.app_logo'), 'C:\\Users\\sande\\OneDrive\\Desktop\\Anvilogic_Task\\Element_Screenshot.png');

        } catch (error) {
            logger.error ('Error during takeScreenshots ' + error);
        }

    };

};
/*Changes done by 1st person*/ 
export default TestMethods;
