let imGlobal ="Im Global";

if (true){
    let iamLocal="inside a";
    console.log(iamLocal)

}

console.log(imGlobal)

// type of the variable

var x=5;

if(x==undefined){
    console.log("X is undefined");
}
else{
    console.log("X is defined");
}

// String concatination

var string="Hello ";
string +="World"; // we can use += sign to concatinate string
//string= string + "World";// either using this one we can concatinate string
console.log(string);

//Regular math operator +,*,-,/

console.log((5+4)/3);
console.log(undefined/5);

function test(a){
    console.log(a/5);
}
test();

//Equality

var x=4, y=4;
if(x==y){       
    console.log("X is equal to y");
}

var x="4";
if(x==y)
{
    console.log("X is equal to y");
}

//Stricly equality

if(x===y){
    console.log("X is equal to y");
}
else{
    console.log("X is not equal to y");
}


// If statement (All false)

if(false || null || undefined || 0 || "" || NaN){
    console.log("This line never be execute");
}
else{
    console.log("All false");
}

// If statement all true

if(true && "Hello" && 1 && -1 && "false"){
    console.log("All true")
}


//For loop


var sum=0;
for (let index = 0; index < 10; index++) {
    sum=sum+index;
}
console.log("Sum of 0 through 9 is :"+sum)


// function

function orderwith(sidedish){
    sidedish = sidedish || " Whatever";
    console.log("Orderwith"+sidedish);
}
orderwith(" Noodles");
orderwith();


//object creation


var company=new Object();
company.name="dsp";
company.owner= new Object();
company.owner.name="Deep"
company.owner.location="Rajkot";

console.log(company);
console.log("Company owner name is"+company.owner.name);
console.log("Company location is "+company.owner.location);

console.log(company["name"] ,company.owner["name","location"])

var facebook={
    firstname:"Facebook",
    ceo:{
        firstname:"Deep",
        lastname:"Ramani"
    }
};

console.log(facebook.ceo.firstname);
console.log(facebook.firstname);
console.log(facebook.ceo.lastname);

console.log(facebook.ceo["firstname"], facebook.ceo["lastname"]);


//Function 

function multiply(x,y){
    return x*y;
}

console.log(multiply(5,3));

// Set a property of the function

multiply.version= "V.1.0.2";
console.log(multiply.version);

// Crate function factory

function makeMultiplier(multiplier){
    var myFunc=function(x){
        return multiplier*x;
    };
    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing function as a argument

function doOperation(x,operation){
    return operation(x);
}

var result=doOperation(5,multiplyBy3);
console.log(result);
result=doOperation(100,doubleAll);
console.log(result);

//Copy by reference and value

//Copy by value

var a=7;
var b=a;

console.log("a:"+a);
console.log("b:"+b);

b=5;
console.log("After Update");
console.log("a:-"+a);
console.log("b:-"+b);

// Copy by reference

var aa= { x1:7 };
var bb=aa;

console.log(aa);
console.log(bb);

bb.x1=5;
console.log("After bb.x1 update");
console.log(aa);
console.log(bb);



// Pass by reference vs by value
function changePrimitive(primValue) {
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primValue);
    
    primValue = 5;
    console.log("after:");
    console.log(primValue);
  }
  
  var value = 7;
  changePrimitive(value); // primValue = value
  console.log("after changePrimitive, orig value:");
  console.log(value);
  
  
  
  function changeObject(objValue) {
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);
    
    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
  }
  
  value = { x: 7 };
  changeObject(value); // objValue = value
  console.log("after changeObject, orig value:");
  console.log(value);
  
  