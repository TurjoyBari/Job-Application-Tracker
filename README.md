### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById is used when we need a single, specific element with a unique ID.
- getElementsByClassName is used when we need a collection of elements with a specific class.
- querySelector is used when we need to select a simple CSS selector, and we only need one element.
- querySelectorAll is used when we need to select all elements matching a complex CSS selector.

### 2. How do you create and insert a new element into the DOM?

- Create the element using document.createElement()
- Insert the element into the DOM using appendChild()


### 3. What is Event Bubbling? And how does it work?

- parent elements to respond to events triggered by their child elements that call event Bubbling
- It works when an element is clicked; an event is directed to the element.

### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event.target property.
- It usefule to handle dynamically added elements

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() is used when we want to handle an event with custom JavaScript logic instead of the browser's built-in action
- stopPropagation() is used when we have nested elements with event listeners, and you want to ensure that a child element's event handler does not accidentally trigger the parent element's handler.
