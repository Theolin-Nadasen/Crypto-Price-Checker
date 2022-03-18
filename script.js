let app = Vue.createApp({
    data(){
        return{
            coins: []
        }
    },
    async mounted() {
        const res = await fetch("https://api2.binance.com/api/v3/ticker/24hr")
        const info = await res.json()
        console.log(info)
        info.forEach((item) => {
            if(item.symbol.endsWith("USDT")){
                this.coins.push(item)
            }
        })
    }
})

app.mount("#app")