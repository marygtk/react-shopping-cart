
describe('Ecommerce functionalities test suite', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('example.json').as('testData')
    })

    it('Validate that XS size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.xs)
        })
    })
    it('Validate that S size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.s)
        })
    })
    it('Validate that M size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.m)
        })
    })
    it('Validate that ML size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.ml)
        })
    })
    it('Validate that L size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.l)
        })
    })
    it('Validate that XL size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.xl)
        })
    })
    it('Validate that XXL size filter returns an item for that size ', ()=>{
        cy.get('@testData').then((testData) => {
            cy.checkSizes(testData.sizes.xxl)
        })
    })

    it('Validate addition of items to the cart', () => {
        cy.addToCartFirstItem('Cropped Stay Groovy off white','$  10.90')
        cy.checkoutProduct()
    })
})