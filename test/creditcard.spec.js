const creditcard = require('../src/creditcard')

const testNumbers = [
    { number: '378282246310005', provider: 'amex' },
    { number: '371449635398431', provider: 'amex' },
    { number: '378734493671000', provider: 'amex' },
    { number: '6011111111111117', provider: 'discover' },
    { number: '6011000990139424', provider: 'discover' },
    { number: '5555555555554444', provider: 'mastercard' },
    { number: '5105105105105100', provider: 'mastercard' },
    { number: '4111111111111111', provider: 'visa' },
    { number: '4012888888881881', provider: 'visa' },
    { number: '4222222222222', provider: 'visa' }
]

const invalidNumbers = [
    '123456789',
    123456789,
    '',
    null,
    undefined
]

// getCreditCardProvider
describe('getCreditCardProvider', () => {
    for (const test of testNumbers) {
        it(`should return ${test.provider} for ${test.number}`, () => {
            expect(creditcard.getCreditCardProvider(test.number)).toBe(test.provider)
        })
    }

    for (const test of invalidNumbers) {
        it(`should return undefined for ${test}`, () => {
            expect(creditcard.getCreditCardProvider(test)).toBeUndefined()
        })
    }
})

// isValidCreditCardNumber
describe('isValidCreditCardNumber', () => {
    for (const test of testNumbers) {
        it(`should return true for ${test.number}`, () => {
            expect(creditcard.isValidCreditCardNumber(test.number)).toBe(true)
        })
    }

    for (const test of invalidNumbers) {
        it(`should return false for ${test}`, () => {
            expect(creditcard.isValidCreditCardNumber(test)).toBe(false)
        })
    }
})

// isSupportedCreditCardNumber
describe('isSupportedCreditCardNumber', () => {
    const supported = ['mastercard', 'visa']

    for (const test of testNumbers) {
        it(`should return ${!!supported.includes(test.provider)} for ${test.number} (${test.provider})`, () => {
            expect(creditcard.isSupportedCreditCardNumber(test.number)).toBe(!!supported.includes(test.provider))
        })
    }

    for (const test of invalidNumbers) {
        it(`should return false for ${test}`, () => {
            expect(creditcard.isSupportedCreditCardNumber(test)).toBe(false)
        })
    }
})