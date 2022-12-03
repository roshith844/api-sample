const req = new XMLHttpRequest()
req.onload = function () {
     console.log("done")
     JSON.parse(this.responseText)
}
req.onerror = function () {
     console.log('error')
}
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
req.send();