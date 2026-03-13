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