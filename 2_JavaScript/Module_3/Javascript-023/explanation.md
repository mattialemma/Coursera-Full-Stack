
The DOM is presented as a JavaScript object with nested objects for different parts of the page.
These objects have nested objects in turn until the entire HTML file is mapped
into what looks like a tree structure.
The DOM is the model of the HTML file saved as a JavaScript object in the browser's memory.



The DOM, or Document Object Model, is like a tree that represents the structure of an HTML document. Imagine having a tree with branches and leaves: each part of the tree represents an element of your web page, such as titles, paragraphs, images, and so on. This tree allows JavaScript to interact with the page content dynamically, allowing you to modify, add, or remove elements while the page is running.

For example, if you want to change the text of a title on your page, you can use JavaScript to "navigate" through this tree and find the specific title. Once found, you can modify its content. This is similar to how a gardener can prune or add branches to a tree to make it grow in a desired shape. In this way, the DOM makes it possible to manipulate and update your web page in real time!

--- JAVASCRIPT SELECTORS --- (We can perform tests in the DevTools Console)
JavaScript selectors interact with the document object, which can be accessed by typing the keyword document. This returns the web page stored in the browser's memory, known as the Document Object Model or DOM

e.g.:
document.querySelector('p')

document.querySelector('a') // anchor tag of the page

There is a JavaScript selector that allows you to get all matches from a web page:

document.querySelectorAll('p')
// I get a result showing that there are tot (e.g.: 2) paragraph tags on the page.

// Search by ID
document.getElementById('heading')

// Search by class
document.getElementsByClassName('txt')
