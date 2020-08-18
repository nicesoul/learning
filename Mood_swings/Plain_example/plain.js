var iLoveYou = 5;
// const body = document.querySelector('body')
const [_top,_middle,_bottom] = document.querySelectorAll('.box')
const getquote = document.querySelector('#getquote')
const info = document.querySelector('#info')
const quote = document.querySelector('#quote')
getquote.addEventListener('click', getQuote)
// _bottom.addEventListener('click', getQuote)


const _API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en';
const _CORS_URL = 'http://no-more-cors-problems.herokuapp.com/';
// const _CORS_URL = 'http://localhost:5000/';

function setBackgroundColor(position, hue, luminosity){ //_top _middle _bottom
    position.style.background = randomColor({ hue:hue, luminosity:luminosity})}

function getQuote() {
    console.log('button is clicked');
    console.log(_top)
    fetch(
            _CORS_URL + 
            _API_URL)
        .catch(err => {fetchBlocked()})
        .then(response => {if (!response.ok) {noresponse()}
            else return response.text()
        })
        .then(data => { if(data) {quote.innerHTML = data
            setBackgroundColor(_top,'random','light');
            setBackgroundColor(_middle,'random','light');
            setBackgroundColor(_bottom,'random','light');}})

}

function fetchBlocked() {
    quote.innerHTML = 'Death is inevitable, but Life is everlasting :) \n\n  actually, no internet or our request was blocked by the browser.';
    setBackgroundColor(_top,'red','dark');
    setBackgroundColor(_middle,'monochrome','light');
    setBackgroundColor(_bottom,'red','dark');
}
function noresponse() {
    // setTimeout(() => {
        quote.innerHTML = 'We will love you forever...\n\n actually, no response from the server, sorry. Maybe, they changed the API? Please, write me to vadimka.wonder@gmail.com so I can fix the problem.';
    setBackgroundColor(_top,'monochrome','light');
    setBackgroundColor(_middle,'monochrome','light');
    setBackgroundColor(_bottom,'monochrome','light');
    // }, 1)    
}


// module.exports = plain;
