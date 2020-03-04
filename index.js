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
//String Methods
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

//-----------------------------------------------------------------


//Number Methods
var num = 5.56789
var n = num.toFixed(2);//rounds off the input after decimal 
console.log(n);
var n1=num.toExponential();//converts to exponential
console.log(n1);
var n2=num.toString();//converts to string
console.log(n2);


//-----------------------------------------------------------------
//Global Methods
//info,warn,error,log,table
console.clear();//clears the console
console.error('hi');//shows error symbol with the message given
console.warn('Aishwarya');//shows warning symbol with message given
console.log('Aishuuuuuuuuu');//shows the given message in console
console.info('Sekar');//info is similar as log,just prints the                              output on the console 
console.table(["Aish", "Meena", "Sekar"]);//table is created in console
//alert('Aishwarya Meenakshi Sekar')//shows the alert box on the screen
//var s=prompt("Aishwarya","Radhika");//displays the prompt message 
                                         //on the screen
var n= new Date();
console.log(nn);//displays the num of  milliseconds
var nn=Number(n);
var n1="4567 5676";
console.log(Number(n1));//output:NaN
var x='4567';
console.log(isNaN(x))// output:false
var b = parseFloat("10.00")
console.log(b)//output:10
              //returns only the integer
var c=parseInt("fasghj");//NaN
console.log(c);      //returns an integer
var a="Aishwarya";
var l=a.length;
console.log(l);//output:9
              //returns length of the string
var bool="Aishwarya";
var b=Boolean(1>2);
console.log(b)   //output:false
                 //returns true if given condition is true or false           





