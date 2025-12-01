
Sito dove effettuare il test:
https://exampledomain.github.io/capture-data/index.html


Obiettivo:
Ad ogni click del mouse su "Example Domain", la scritta stessa deve assumere un valore diverso dell'array.
    Click 1 -> 'First Click'
    Click 2 -> 'Second Click'
    Click 3 -> 'Third Click'
    Default ->  'Example Domain'

Comandi lanciati nella Console DevTools:

1)
var h1 = document.querySelector('h1')


2)
var arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]


3)
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}

4)
h1.addEventListener('click', handleClicks);

