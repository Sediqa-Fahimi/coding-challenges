/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Desk from './Desk.js';


const myDesk = new Desk('desk1','brown');

console.log(myDesk.name, myDesk.color);
myDesk.updateNameColor('Work Desk','black');
console.log(myDesk.name, myDesk.color);

// Template Literal: mix of HTML and JS.
const content = `
    <p>Hello , You Got This!</p>
    <ul>
        <li>Name: ${myDesk.name}</li>
        <li>Color: ${myDesk.color}</li>
    </ul>
`;

document.body.innerHTML = content;