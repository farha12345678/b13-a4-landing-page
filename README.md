1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 
* getElementById selects one element using a specific id.
* getElementsByClassName Selects all elements with the same class and returns an HTMLCollection.
* querySelector Uses a CSS selector to select the first matching element.
* querySelectorAll Uses a CSS selector to select all matching elements and returns a NodeList.

2. How do you create and insert a new element into the DOM?
ans:
To create and insert a new element into the DOM, we first use document.createElement() to create the element. After creating it, we can add content to the element using properties like innerText or innerHTML. Finally, we insert the element into the DOM by using methods such as appendChild() on a parent element. This allows the new element to appear on the webpage.

3. What is Event Bubbling? And how does it work?
ans:
Event bubbling is a process in the DOM where an event starts from the target element and then propagates upward through its parent elements until it reaches the root of the document. When an event occurs on a child element, the same event is triggered on its parent, then on the parent's parent, and continues moving up the DOM tree. This means if a child element and its parent both have event listeners for the same event, the child’s event will run first, and then the parent’s event will execute as the event bubbles up.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:
Event delegation in JavaScript is a technique where a single event listener is added to a parent element instead of adding separate listeners to multiple child elements. The parent element listens for events that bubble up from its child elements and then handles them based on the event target.

It is useful because it improves performance and reduces code complexity, especially when dealing with many elements or dynamically added elements. With event delegation, newly added child elements will also respond to the event without needing additional event listeners.

5. What is the difference between preventDefault() and stopPropagation() methods?