
Website to perform the test:
https://exampledomain.github.io/capture-data/index.html


Objective:
With each mouse click on "Example Domain", the text itself must take on a different value from the array.
    Click 1 -> 'First Click'
    Click 2 -> 'Second Click'
    Click 3 -> 'Third Click'
    Default ->  'Example Domain'

Commands launched in the DevTools Console:

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

