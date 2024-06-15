//var al=('I am javascript');
// use of Strict code for stictly modern code
"Strict code";
var v = ("do you like the web page");
//alert(v);
//prompt box
//var d = prompt("what is your name");
//alert(d);
var number12=[1,2,3,4,4,]

console.log(number12);
number12.push(7);
console.log(number12);

var handleClick = function(event) {
    console.log(event.type);  // click
    console.log(event.currentTarget); // the thing you clicked
    console.log(event.screenX); // screen X coordinate
    console.log(event.screenY); // screen Y coordinate
  }
  let button = document.getElementById("clicker");
button.addEventListener("click", handleClick);



 // primitive asignment
 var bike = "Mountain Bike";
 let currentGear = 5;
 //const numberOfGear = 10;
 // reassignment
 bike = "Race bike";
 currentGear = 7;
 //numberOfGear = 11;
 var p = 10;
var b = 20;
if (p > b) {
console.log("p is greater ");
} else {
console.log("b is greater");
}
//code without semicolon gives error after the completion of the task
// confirm box


 console.log(bike);
 console.log(currentGear);
// alert(numberOfGear);
//variable
a='Heyyya';
console.log(a);
let s=23,g='done',c=232.323;
console.log(a+s+g+c);
var message="differt word then hello";
console.log(message);
var name='john';
var admin=name;
console.log(admin);
var earth='Earth';
console.log(earth);
//name of the variable of the recent visitor on the website
var current_visitor='john Abrhim';
console.log(current_visitor);



 

console.log('hello World');
//date and day
var todaysDate= new Date();
todaysDate.getDate();
//todaysDate.getday();
todaysDate.getFullYear();
todaysDate.getHours();
todaysDate.getMilliseconds();


// maps and set
// Map : map is a collection of keys data  item , just like an object . but the main difference is that
//map allow any key of any type
 // Properties of Maps
 var myMap= new Map();
 myMap.set(FirstName='Amit', LastName='shah');
 myMap.has('panthar');
 myMap.get('FirstName');
 myMap.delete('LastName');
 myMap.values('FirstName');
 myMap.entries();
 myMap.size
 myMap.clear()


 //methods:map.keys(), map.values(),map.entries().
 //Set: A set is a speacial tytpe collection : 'set of Values' (without keys) where each value may occur inly once.
 // methods in the set: set.add(values), set.delete(values),set.has(value),set.clear(),set.size.
 var mySet= new Set();
 mySet.add('sakshi');
 mySet.add('is')
 mySet.add('here')
 mySet.has('ram');
 mySet.clear('is')
 //mySet.size();
 mySet.entries;


 //Difference between == and the === signs
 // so basically the == check the value in any variables wheres the === use the datatype along with the value of any variable
 10=='10'//true
 //11==='11'//false
 // therefore when we are using the strict and unstrict operator it give wrong answer so to eliminate these problem we use object.is for comparing
 Object.is(0,-0);
 Object.is('Nan','Nan');


 //String function

 var str="Thar, Scorpio, Fortuner, Maruti, Honda";
 // some of methods are:Slice(Start, end),subString(start, end),toUpperCase(),toLowerCase(),trim, padStart,padEnd,Spilt, includes,concat(firstString,secondString)
 str.charAt(1);
 str.slice(1,2);
 str.startsWith('t');
 str.substring(3,7);
 str.replace('Thar','MarutiSuzuki');
 str.toUpperCase();
 str.toLocaleLowerCase ;
 str.startsWith('honda');
 str.endsWith('jhupri');
 var str1= "there fore you are here";
 str1.trim();
//  var srt2 = 55;
//     str1.padstart(5,'&');
//     str1.padend(5,'$')

//object : object are the collection of the various data and more complex entity . it store data in the key-value pair.
//where the key can be theString and value can be anything.
let obj={company1:'Microsoft',founder1:'Bill Gates Paul Allen',company1:'IBM',founder1:'Thomas J. Watson Charles Ranlett Flint'}
obj.add('company1');
let user={admin:'True'}
user.title="admin";
user.email="test@gmail.com";
user.address="addresss of user"
user.userName=123;
let users={name:'',email:'',place:'',adminInfo:{isadmin:false, access:["ip","Email"]}};
let admin1=users;
admin1.admin1Info.isadmin1=true;
console.log(admin1);

//object method:object.create,object.fromEntries,hasOwnProperty,object.assign({},anotherObject),objectkeys(object),object.values,object.is,object,entries.
users.isadmin1();
users.values(map);
let map=user.fromEntries(myMap);
user.keys(map);
let adminNew={...admin1}
console.log(adminNew)
let adminA=JSON.parse(JSON.stringify(user));
user.hasOwnProperty('name');
user.hasOwnProperty('isEmail');
user.email;
delete adminA.email;
console.log(admin1.email )
user.freeze(admin1)


//loops : for ,for/in,while,do/while
//for:block a code for the number of time
//for/in: loops through the property of object
let array1=['Microsoft', 'Yahoo','IBM','Ksolves']
let len=array1.length; 

for(let i=0; i<array1.length; i++){
alert(array1[i]);
}
for(let x in user){
alert(userName[x]);
}
userName[x];
let j=0;
while(i<5){
alert(i);
}
let k=7;
do{
alert(k)
k++;
}while(k<9)

//Array:collection of the similiar type of the element of data is called array
let array2=[ "apple","mango","banana","orange"]
console.log(array2.length-1);
array2.indexOf('apple')
array2.join('   $ ')
let select=('----select one-----')
let option =array2.concat(select)
console.log(option)
option.pop();


