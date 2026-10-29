console.log('Hi!');

let name='Hima';
const college='Reva';

console.log(name,college)
//if (x=10) {
  //  console.log(x);
//}
//else{

//}

function greet(){
    console.log('Hello RCB!!');
}

greet();

//Expression function
const add = function(a,b)
{
    return a+b;
};

console.log(add(2,3));

//Arrow function
const text=(name) =>{
    return 'Hello' + name;
};
console.log(text('Hima'));

//Anonymous Function
setTimeout(function()
{
    console.log('this will run for 2 seconds!');
},2000);

//Call Back Function
function calc(x,y,op){
    return op(x,y);
}
console.log(calc(2,3,(x,y) => x+y));

let birthYear = 2006;
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("my age is " + age);


