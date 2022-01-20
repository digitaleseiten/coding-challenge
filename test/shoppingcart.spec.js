const shoppingcart = require('../src/shoppingcart')

const products = {
    jeans: { name: 'jeans', category: 'men', price: 69.99 }, 
    shirt: { name: 'shirt', category: 'men', price: 49.99 }, 
    shoes: { name: 'shoes', category: 'men', price: 59.99 },
    skirt: { name: 'skirt', category: 'women', price: 29.99 }, 
    top: { name: 'top', category: 'women', price: 19.99 }, 
    sneaker: { name: 'sneaker', category: 'kids', price: 29.99 }
}

const testCases = [
    {
        cart: [
            products.jeans,
            products.shirt,
            products.shoes
        ],
        total: 152.97,
        discount: 27.00
    },
    {
        cart: [
            products.skirt,
            products.top,
            products.sneaker
        ],
        total: 79.97,
        discount: 0.00
    },
    {
        cart: [
            products.jeans,
            products.top,
            products.shoes
        ],
        total: 130.47,
        discount: 19.50
    },
    {
        cart: [
            products.jeans,
            products.skirt
        ],
        total: 99.98,
        discount: 10.50
    },
    {
        cart: [],
        total: 0.00,
        discount: 0.00
    },
    {
        cart: [
            products.jeans,
            products.jeans,
            products.jeans,
            products.jeans,
        ],
        total: 237.97,
        discount: 41.99
    },
    {
        cart: [
            products.skirt,
            products.skirt,
            products.skirt,
            products.skirt,
        ],
        total: 119.96,
        discount: 0.00
    }
]

// getOrderTotal
describe('getOrderTotal', () => {
    for (const idx in testCases) {
        const test = testCases[idx]
        it(`should return ${test.total} for test case #${idx}`, () => {
            expect(shoppingcart.getOrderTotal(test.cart)).toBeCloseTo(test.total)
        })
    }
})

// getDiscount
describe('getDiscount', () => {
    for (const idx in testCases) {
        const test = testCases[idx]
        it(`should return ${test.discount} for test case #${idx}`, () => {
            expect(shoppingcart.getDiscount(test.cart)).toBeCloseTo(test.discount)
        })
    }
})