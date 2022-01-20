# Digitale Seiten Coding Challenge

To solve the following challenges, you need [NodeJS](https://nodejs.org/en/) installed.

Then run `npm install` in this folder to install required dependecies.

To test your code, you can run `npm run test` anytime.

## Challenge 1: Validate Creditcard Numbers

File: `src/creditcard.js`

Test: `npm run test creditcard`

In our online store we want to give our users the possibility to pay with creditcard. Because of high fees, only some providers are supported.

Your task is to implement the 3 functions in `src/creditcard.js`:

- `isValidCreditCardNumber` should return true, if the given number is a valid creditcard number. 
- `getCreditCardProvider` should return the name of the credit card provider (e.g. "visa") of the given credit card number.
- `isSupportedCreditCardNumber` should return `true` if we support the credit card provider (see `providers` in `src/creditcard.js` file).

## Challenge 2: Apply Coupon to Shopping Cart

File: `src/shoppingcart.js`

Test: `npm run test shoppingcart`

As we want to attract more men to our store, we give our customers **15 %** off on all products in the category `men`. The minimum order value is 100 € though.

Your task is to implement the `getDiscount()` and the `getOrderTotal()` function in `shoppingcart.js`.

For both functions, you are given a `cart`-parameter, that is an array with one element for each product in the shopping cart. Every product has a name, a category and a price. E.g.:

```json
[
    { "product": "jeans", "category": "men", "price": 69.99 },
    { "product": "top", "category": "women", "price": 19.99 }
]
```
