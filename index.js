// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*
primitive-string,boolean,numb,symbol
reference-object,arrays
special-NaN,null,undefined
*/
let a='Aishwarya';
let b='Sekar'
let ccat = a.concat(b);

console.log(a.length);//gives the length of the string
console.log(ccat);
let ew=ccat.endsWith('Sekar');//returns true if it ends with Sekar
console.log(ew);
let inc=ccat.includes('A');//returns true if string contains A
console.log(inc);
let io=ccat.indexOf('a');//finds the 1st occurrence of a
console.log(io);
let lio=ccat.lastIndexOf('a');//finds the last occurrence of letter a
console.log(lio);
let rep=ccat.repeat(5);//repeats the string
console.log(rep);
let replace=ccat.replace('Aishwarya','Meenakshi');//replaces string
console.log(replace);
let search=ccat.search('o');//returns -1 if no matches found
console.log(search);
let slice=ccat.slice('1','9');//splits the string with given indexes
console.log(slice);
let splits=ccat.split('a');//splits when letter a comes
console.log(splits);
let stwt=ccat.startsWith('A');//returns true if the string starts with A
console.log(stwt);
let sub=ccat.substring(1,8);//gives substrnigs from original string
console.log(sub);
let tlc=ccat.toLowerCase();//changes to lower
console.log(tlc);
let tuc=ccat.toUpperCase();//changes to upper
console.log(tuc);
let s='         Aishwarya Sekar     '
let trim=s.trim();//removes spaces on both sides
console.log(trim);