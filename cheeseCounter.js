const url = 'https://openexchangerates.org/api/latest.json?app_id=452a0e814ad04450a31701fb9d469b31'

fetch(url).then(response => {
  return response.json();
}).then(data => {
  if (window.location.search === "?country=uk") {
  	let euro = 1 / data.rates.EUR
  	let gbp = 1 / data.rates.GBP
  	let euroGbp = euro/gbp
  	let cheesePieces = Math.floor(19.99/(3.24 * euroGbp))
  	document.getElementById("pieces").innerHTML = cheesePieces + ' blocks of cheese for £19.99'
    document.getElementById("cheese").innerHTML = '&#129472;'.repeat(cheesePieces)
    }
  else if (window.location.search === '?country=japan') {
    let euro = 1 / data.rates.EUR
    let jpy = 1 / data.rates.JPY
    let euroYpy = euro/jpy
    let cheesePieces = Math.floor(3000.00/(3.24 * euroYpy))
    document.getElementById("pieces").innerHTML = cheesePieces + ' blocks of cheese for JPY 3000'
    document.getElementById("cheese").innerHTML = '&#129472;'.repeat(cheesePieces)
  }
}).catch(function(err) {
  console.log(err)
  document.getElementById("pieces").innerHTML = 'god knows how many(something went wrong)'
});
