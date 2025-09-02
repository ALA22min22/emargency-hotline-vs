1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#getElementById-

1. Selection: It is using a particular single element and exicute there code. 

2. Return Value: return the single element object, and element is dose-not fined then return the null value

3. Usage: document.getElementById('myId');

#getElementsByClassName-

1. Selection: It is select the multiple element into a single class name

2. Return Value: It return the HTMLCollection , output structure likely Arry like object and it is a live collection.

3. Usage: document.getElementsByClassName('myClass');

#querySelector-

1. Selection: It is using CSS-selector to select the element like- ('#my-id'), ('.my-class'), ('p'), ('div')

2. Return Value: It is matchinged the perticular selector and matched the first element can returned it's called single type element return. and dont find the selector then return the value is 'Null'

3. Usage: document.querySelector('#my-id')

#querySelectorAll-

1. Selection: It is using CSS-selector to select the element like- ('#my-id'), ('.my-class'), ('p'), ('div'), and all matches selector can exicuted.

2. Return Value: It is return the NodeList, and It is a static Collection, and output structure return likely Array-like-object

3. Usage: document.querySelector('.my-id')

2. How do you create and insert a new element into the DOM?

Under dom we can create that the new element and set the value of that element externally or dynamically,  create element like - div, p, h1, etc :

create element process into the dom:

const div = document.createElement('div');

and, set the value of in this new element :

div.innerText = 'Honey';
div.innerHTML = `write some HTML code`;
div.getAttribute(), div.setAttribute(), etc

and, at last that the new div can insert into the main HTML dynamically, so firstly declare the inserted/parent element under the dom then already created new HTML element append into the parent element.

append process is :
parent_element_name.appendChild(new_element_name);

3.What is Event Bubbling and how does it work?

When trigger the event of any element then that event is runed into there parent element and go to the upper segment/parent-element and it is contineusly runed until the document parent touched.

working:
1. event trigerd : users work like one-click on the element 
2. Event Handler Execution: firstly click the button and exicuted that element
3.Bubbling Up: The event then travels up the DOM tree, from the button to its immediate parent like- (div), then to t div's parent, and so on, all the way to the document object.
4.Propagation: At each level, if a parent element also has a handler for the same event type (like- a click), that handler will also be executed.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique of javascript, event listener diclare on the parent element the exicuted the all there child element, cauze it's process on the event bubble technique, must bubble can back on the parent-node.

why is it useful :

1. Improved Performance and Memory Efficiency: suppose we can add the event-listener on the each child element then problem occure, browser can loaded huge memory space so pressure create on the browser then huge problem is occur like - slow loading, unexpected browser behavior, etc. 

2. Handles Dynamically Added Elements: when event listener apply on the parent element then oviously get to the access there child node, and suppose we can push the dynamic child element then automatically access that the child element cause we are using the event listener on the parent element and we know this event declaration following the process of event bubble.

3. Cleaner, More Maintainable Code: cleaner means code structure is clean resone of we are dynamically access so, writing the less-code is enuff, using the less-code so maintain process is easy.

5. What is the difference between preventDefault() and stopPropagation() methods?

1. preventDefault() is using of that time when we are create the button under the form , then we are trying to access the button  when clicked the button then browser is getting to the reload, so trying to stope the reload process we can use preventDefault(). ex: function_argument.preventDefault();

2. The event bubble is starting then depend on our requrement to trigerd the multiple child element then show the each child element output, we are trying to stoped the trigerd on the perticular element so, we are using the stopPropagation() in that the particular child element. 
ex: function_argument.stopPropagation();