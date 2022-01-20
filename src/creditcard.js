const providers = [
    { name: 'mastercard', supported: true },
    { name: 'visa', supported: true },
    { name: 'amex', supported: false },
    { name: 'discover', supported: false }
]


/**
 * Return the provider of a given creditcard number.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {string} - Name of the creditcard provider.
 */
 function getCreditCardProvider (number) {

    // your code goes here :-)

}

/**
 * Validates a given creditcard number.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {boolean} - True if the creditcard number is valid.
 */
function isValidCreditCardNumber (number) {

    // your code goes here :-)

}

/**
 * Validates if a given creditcard number is supported.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {boolean} - True if the creditcard provider is supported.
 */
 function isSupportedCreditCardNumber (number) {

    // your code goes here :-)

}


module.exports = {
    getCreditCardProvider,
    isValidCreditCardNumber,
    isSupportedCreditCardNumber
}