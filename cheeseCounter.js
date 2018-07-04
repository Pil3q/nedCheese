const url = 'https://openexchangerates.org/api/latest.json?app_id=452a0e814ad04450a31701fb9d469b31'

fetch(url).then(response => {
  return response.json();
}).then(data => {
  if (window.location.search === "?country=uk") {
      priceSetter(data.rates.EUR, data.rates.GBP, 19.99, '£')
    }
  else if (window.location.search === '?country=japan') {
    priceSetter(data.rates.EUR, data.rates.JPY, 3000.00, '¥')
  }
}).catch(function(err) {
  console.log(err)
  document.getElementById("pieces").innerHTML = 'god knows how many(something went wrong)'
});
function priceSetter(baseCurrency, currency, price, symbol) {
  let euro = 1 / baseCurrency
  let gbp = 1 / currency
  let euroGbp = euro/gbp
  let cheesePieces = Math.floor(price/(3.24 * euroGbp))
  document.getElementById("pieces").innerHTML = cheesePieces + ` blocks of cheese for ${symbol}${price}`
  document.getElementById("cheese").innerHTML = '&#129472;'.repeat(cheesePieces)
}
