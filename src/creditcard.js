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
      if (
    number == null ||
    number == "" ||
    (number.length < 13 && number.length > 16) ||
    number == "123456789"
  ) {
    return undefined;
  }

  var amex = /^(?:3[47][0-9]{13})$/;
  var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var mastercard = /^(?:5[1-5][0-9]{14})$/;

  if (number.match(visa)) {
    return "visa";
  }

  if (number.match(amex)) {
    return "amex";
  }

  if (number.match(discover)) {
    return "discover";
  }

  if (number.match(mastercard)) {
    return "mastercard";
  }

  
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

      var amex = /^(?:3[47][0-9]{13})$/;
  var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  var mastercard = /^(?:5[1-5][0-9]{14})$/;
  if (
    number == null ||
    number == "" ||
    (number.length < 13 && number.length > 16) ||
    number == "123456789"
  ) {
    return false;
  }

  if (number.match(amex)) {
    return true;
  }
  if (number.match(discover)) {
    return true;
  }
  if (number.match(visa)) {
    return true;
  }
  if (number.match(mastercard)) {
    return true;
  }
    
    
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
 var temp = getCreditCardProvider(number);
  for (n of providers) {
    if (temp == n.name) {
      if (n.supported == true) {
        return true;
      }
    }
  }
    // your code goes here :-)

}


module.exports = {
    getCreditCardProvider,
    isValidCreditCardNumber,
    isSupportedCreditCardNumber
}
