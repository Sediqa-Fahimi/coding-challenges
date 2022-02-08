/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */



const header = document.querySelector('header');
header.style.backgroundColor = 'blue';

const lis = document.querySelectorAll('li');
lis.forEach(item => item.style.listStyleType = 'none');
