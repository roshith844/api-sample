(async ()=>{
     fetch('https://api.cryptonator.com/api/full/btc-usd')
     .then(res=>{
          console.log(res)
     })
     .catch(e=>{
          console.log(e)
     })
})()

// axios.get('https://api.cryptonator.com/api/full/btc-usd')

