/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
document.querySelector('header').classList.add('class-1','class-2');

document.querySelector('header').classList.remove('class-2');

const content = `
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
`;

const nav = document.createElement('nav');
nav.classList.add('navbar');
nav.innerHTML = content;
const header = document.querySelector('header');
header.insertAdjacentElement('afterend', nav);



