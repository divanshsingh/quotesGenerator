const api_url = "https://api.quotable.io/random"

const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
const newQuote = document.querySelector("#new_quote")
const Tweet = document.querySelector("#tweet")

async function getQuotes(url){
    const response = await fetch(url)
    var data = await response.json()

    quote.innerHTML = data.content
    author.innerHTML = data.author
}

newQuote.addEventListener('click', ()=>{
    getQuotes(api_url)
})

Tweet.addEventListener('click', ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " " + "_____ by " + author.innerHTML, "Tweet Window", "width=600", "height=300")
    })
    getQuotes(api_url)

// getQuotes(api_url)