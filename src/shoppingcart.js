// All products from category 'men' get 15% off with a minimum order value of 100 €

/**
 * Return the order total of a given cart.
 * 
 * @param {Object[]} cart - The shopping cart containing products.
 * @param {string} cart[].name - The products name.
 * @param {string} cart[].category - The products category.
 * @param {Number} cart[].price - The products price.
 * 
 * @returns {Number} - Order Total
 */
function getOrderTotal (cart) {
  var total = 0;
  for (i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  if (total >= 100) {
    total -= getDiscount(cart);
  }

  return total;
    // your code goes here :-)

}

/**
 * Return the discount value of a given cart no matter if its applicable or not.
 * 
 * @param {Object[]} cart - The shopping cart containing products.
 * @param {string} cart[].name - The products name.
 * @param {string} cart[].category - The products category.
 * @param {Number} cart[].price - The products price.
 * 
 * @returns {Number} - Discount Value
 */
function getDiscount (cart) {
 var menTotal = 0;
  for (r = 0; r < cart.length; r++) {
    if (cart[r].category.localeCompare("men") == 0) {
      menTotal += cart[r].price;
    }
  }

  menTotal *= 0.15;
  return Math.round((menTotal + Number.EPSILON) * 100) / 100;
    // your code goes here :-)

}

module.exports = {
    getOrderTotal,
    getDiscount
}
