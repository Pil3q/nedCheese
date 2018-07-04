function priceSetter(baseCurrency, currency, price) {
  let euro = 1 / baseCurrency
  let customerCurrency = 1 / currency
  let euroToCustomer = euro/customerCurrency
  let cheesePieces = Math.floor(price/(3.24 * euroToCustomer))
  return cheesePieces
}
describe('priceSetter', function(){
  it('calculate the price', function(){
    expect(priceSetter(0.858682, 0.75657, 19.99)).toEqual(7)
  })
})
