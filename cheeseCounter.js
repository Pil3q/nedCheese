const url = 'https://openexchangerates.org/api/latest.json?app_id=452a0e814ad04450a31701fb9d469b31'

fetch(url).then(response => {
  return response.json();
}).then(data => {
	let euro = 1 / data.rates.EUR
	let gbp = 1 / data.rates.GBP
	let euroGbp = euro/gbp
	let cheesePieces = Math.floor(19.99/(3.24 * euroGbp))
	document.getElementById("pieces").innerHTML = cheesePieces
  document.getElementById("cheese").innerHTML = '&#129472;'.repeat(cheesePieces)
});
