//=============================================//
//S3: Template string
//=============================================//
const name = 'iman';
const age = 30;
const hello = `Hello, ${name}`;

console.log(hello);

const sqlQuery = `SELECT * FROM users WHERE name="${name}" AND age=${age}`;
console.log(sqlQuery);

// const string = 'Toplearn is \n' +
// 'best place to learn';

const string = `Toplearn is
best place to learn
and grow your knowlege`;

console.log(string);

const test = `12 * 2 = ${12 * 2}`;
console.log(test);

const isMember = false;
const price = `Gheymat : ${isMember ? '200' : '400'}`;
console.log(price);

const newHtml = `
  <div class="text-center">
    <p>${name}</p>
  </div>
`;
console.log(newHtml);

//=============================================//
//S4: Tagged Templates
//=============================================//

let text1 =
    'Duis esse do ea adipisicing occaecat anim commodo anim ipsum culpa.';
let text2 = 'Laborum et incididunt sit exercitation ad ipsum consectetur.';
let text3 =
    'Consequat eiusmod cupidatat elit sit veniam enim laboris et magna.';

const lines = [text1, text2, text3];

// function buildHtml(strings, expretions, expretion2) {
function buildHtml(tags, lines) {
    // console.log('HTML Works');
    // console.log(strings)
    // console.log(expretions)
    // console.log(expretion2)


    //Lines means <li>
    const newHTML = lines.map(function (line) {
        return `${tags[0]}${line}${tags[1]}`;
    });

    return newHTML;
}

const result = buildHtml`<li>${lines}</li>`;

console.log(result);

//=============================================//
//S5: Functions Update
//=============================================//

// function getSum(a, b, c = 's'){
//   if(c === 's') {
//     return a + b;
//   } else if(c === 'm') {
//     return a * b;
//   }
// }

// const result = getSum(y = 3, x = 2,  'm');
// console.log(result);

'Rest Operator';

// function getMax(maxNum) {
//   // console.log(arguments[0]);

//   let max = 0;

//   for(let i = 1; i < arguments.length; i++){
//     if((arguments[i] < maxNum) && (arguments[i] > max)){
//       max = arguments[i];
//     }
//   }
//   return max;
// }


// const result = getMax(70, 80, 50, 40, 60, 20, 67, 30);

// console.log(result);

function getMax(maxNum, ...numList) { // maxNum: 70, ...numList: (80, 50, 40, 60, 20, 67, 30)
    let max = 0;

    // console.log(numList);
    // console.log(arguments)

    numList.filter(function (num) {
        if (num < maxNum && num > max) {
            max = num;
        }
    });
    return max;
}

const result = getMax(70, 80, 50, 40, 60, 20, 67, 30);

console.log(result);

//=============================================//
//S6: Spread Opreators
//=============================================//

// function getSum(a,b,c,d,e){
//   return a + b + c + d + e;
// }

// let numbers= [1,2,3,4,5];

// // const result = getSum(numbers[1], numbers[2]); //JS1

// // const result = getSum.apply(null, numbers) //JS3

// const result = getSum(...numbers) //JS6
// console.log(result);

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];

console.log(newArray);

const person = {
    firstname: 'Hamid',
    lastname: 'Dezhkam',
    age: 30
};

const newPerson = {
    ...person,
    age: 35
};

console.log(newPerson);

//=============================================//
//S7: Arrow Function
//=============================================//

// function myFunction() {
//   ...
// }

// const myFunction = () => {

// }

// const getSum = (a,b) => {
//   return a + b
// }

// const getSum = a => a + 2;

const getSum = (a, b) => a + b;

console.log(getSum(2, 3));

//=============================================//
//S8: Object Literals
//=============================================//

// let x = new Object()    //Method 1 for create object

// let x = Object.create(null)  //Method 2 for create object

let x = {  //Method 3 for create object
    firstname: 'Hamid',
    lastname: 'Dezhkam',
    getName: function (name) {
        console.log(`my name: ${name}`);
    }
};

let firstname = x.firstname;
let getName = x.getName;

getName(firstname);
console.log(firstname);

('Object Literals');

let newData = {
    firstname,  //firstname : firstname
    getName(name) {  //create function inside of object without use function literal
        console.log(`my name: ${name}`);
    },
    getLastname: lastname => {
        console.log(`my name: ${lastname}`);
    }
};

console.log(newData);

newData.getLastname('Dezhkam');

//=============================================//
//S9: Object Destructuring
//=============================================//

const jsonData = {
    firstname: 'Hamid',
    lastname: 'Dezhkam',
    email: 'test@example.com',
    gender: 'male',
    hobbys: ['gaming', 'programming', 'movie', 'meditation']
};

// const dataProcessor = (data) => {
//     //important work
//     console.log(data);
// }

// const firstname = jsonData.firstname;
// const lastname = jsonData.lastname;
// const email = jsonData.email;

const { firstname, lastname, email } = jsonData; //object destructuring
// const {firstname: name, lastname: family, email: e} = jsonData;

const dataProcessor = (data) => {
    // important work
    const { firstname, lastname, email } = data;
    console.log(`the user fullname is : ${firstname} ${lastname}
     email: ${email}`);
}

//OR

const dataProcessor = ({ firstname, lastname, email }) => {
    //important work
    console.log(`the user fullname is : ${firstname} ${lastname}
     email: ${email}`);
}

// const dataProcessor = ({lastname, firstname}) => {
//     //important work
//     console.log(`the user fullname is : ${firstname} ${lastname}`);
// }

// dataProcessor(jsonData)

const [first, second, third] = jsonData.hobbys; //it's mean grab 0 index and put that on first and ...

// console.log(first, second, third)

// const [,,,fourth] = jsonData.hobbys

// console.log(fourth)

const [, second, ...others] = jsonData.hobbys;
console.log(others);

//=============================================//
//S10: Class
//=============================================//

// 'ES5 Class'

// function Person(firstname , lastname , age) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     // this.sayMyName = function() {
//     //     console.log(`My Name Is: ${this.firstname}`)
//     // }
// }

// Person.prototype.sayMyName = function() {
//         console.log(`My Name Is: ${this.firstname}`)
//     }

// const person1 = new Person('Hamid', 'Dezhkam', 35);
// // person1.firstname = 'Jonah'
// // console.log(person1.firstname)
// console.log(person1);
// person1.sayMyName()

'--------------------------------------';
'ES6 Class';

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    sayMyName() {
        console.log(`My Name Is: ${this.firstname}`);
    }
}

const person1 = new Person('Iman', 'Madaeny', 30);  //instance of Person
// person1.firstname = "Jonah"
console.log(person1);
person1.sayMyName();

//=============================================//
//S11: Setter and Getter (setter and getter make class to private)
//=============================================//

class Person {
    constructor(firstname, lastname, age) {
        this._firstname = firstname; //"._" make private (for this reason we should use set and get)
        this._lastname = lastname;
        this._age = age;
    }

    sayMyName(name) {
        console.log(`My Name Is : ${name}`);
    }

    set firstname(newFirstname) {
        console.log('Setting firstname');
        this._firstname = newFirstname;  //._ make private
    }

    get firstname() {
        console.log('Getting firstname');
        return this._firstname;
    }
}

const person1 = new Person('Hamid', 'Dezhkam', 35);
person1.firstname = 'Jonah';
console.log(person1);
console.log(person1.firstname);

//=============================================//
//S12: Static Methods
//=============================================//

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    sayMyName() {
        console.log(`My Name Is : ${this.firstname}`);
    }

    static goodPerson(name) {
        console.log(`${name} is a good person.`);
    }
}
// Class Method
// const person1 = new Person('Hamid', 'Dezhkam', 35);
// person1.sayMyName()


// Statics Method
// person1.goodPerson('UNS')
Person.goodPerson('Hamid');

//=============================================//
//S13: Subclass and Inheritance
//=============================================//

class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    sayMyName() {
        console.log(`My name is: ${this.firstname}`);
    }
}

class Programmer extends Person {
    constructor(job, ...person) {
        super(...person);
        this.job = job;
        console.log(this.job);
        console.log(person);
    }

    sayMyName() {
        console.log(`My name is: ${this.firstname} i'm a ${this.job}`);
    }
}

const personInfo = ['Programmer', 'Hamid', 'Dezhkam', 35];

// const person1 = new Person(...personInfo)
// person1.sayMyName()

const programmer = new Programmer(...personInfo);
programmer.sayMyName();

//=============================================//
//S14: Arrays(for..of)
//=============================================//

//for ..of

const myArr = [1, 2, 3, 4, 5, 6, 7];

// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i])
// }

//for ..in

// for(let key in myArr){
//     // console.log(key)  //it shows just index number
//     console.log(myArr[key])
// }

const obj = {
    firstname: 'Hamid',
    lastname: 'Gh',
    age: 35
}

// for(let key in obj){
//     // console.log(key) //it shows key in objects
//     console.log(obj[key])
// }

//forEach
// myArr.forEach(value => {
//     console.log(value)
// })

// myArr.forEach((value, index) => {
//     console.log("Value", value),
//     console.log("index", index)
// })

//for ..of

// for(let key in myArr){
//     console.log(myArr[key])
// }

// for(let myVal of myArr){
//     console.log(myVal)
// }

const myStr = `Toplearn is best place to learn`;
for (let myString of myStr) {
    console.log(myString);
}

//=============================================//
//S15: Arrays.from (Create Array from number, string and param)
//=============================================//

const name = Array.from('Hamid');
console.log(name);  //[H, a, m, i, d]

const template = Array.from(`${2 + 10}`);
console.log(template); // [1, 2]

const lorem1 =
    'Quis aute nisi amet enim excepteur occaecat veniam esse irure minim aliquip elit pariatur mollit.';
const lorem2 =
    'Sunt veniam proident velit est consectetur pariatur cillum enim anim.';

let lines = Array.from([lorem1, lorem2], line => {
    return `<li>${line}</li>`;
});

console.log(lines);

let numbers = Array.from([3, 5, 4], num => num + num);

console.log(numbers); // [6, 10, 8]

//=============================================//
//S16: Array.of() Array.fill()  Array (Create Array from number, string and param)
//=============================================//

'Array.of()'
// const arr1 = [1,2,3,4];  //JS old Ver
// console.log(arr1)

// const arr2 = Array(7);
// console.log(arr2); [ , , , , , , , ] !!!!

// const arr3 = Array.of(7)  //solution is Array.of
// console.log(arr3)

'Array.fill()'

const arr1 = [2, 3, 'a', 'b', 4];

arr1.fill('c', -1); //add from end of array
console.log(arr1) // [2,3,'a','b','c',4]

let nums = ['one', 'two', 'three', 'five'];
nums.splice(3, 0, 'four')
console.log(nums)

//=============================================//
//S17: find and findIndex in Arrays
//=============================================//

//Array.prototype.find()
//Array.prototype.findIndex()

const friendsData = require('./data');  //in external file

// const friend = friendsData.find(f => {
//     return f.age > 25;
// });

const friend = friendsData.findIndex(f => {
    return f.age === 29;
});

// const otherFriend = friendsData.map(f => {
//     return f;
// });

console.log(friend);

//=============================================//
//S18: MAP()  Map is object with iterable capablility - Map() is constructor - new Map()
//=============================================//

const obj = {
    firstname: 'Hamid'
};

let myFunction = () => {
    console.log('Hello World');
};

let contacts = new Map(); //Map is object with iterable capablility

contacts.set('Hamid Dezhkam', '093500000'); // set key value pair in contacts
contacts.set(myFunction, 'Function on map'); // we can set function as well

console.log(contacts.get(myFunction)); // Function on map

//=============================================//
//S19: MAP Methods
//=============================================//

const obj = {
    firstname: 'Hamid'
};

let myFunction = () => {
    console.log('Hello World');
};

let contacts = new Map();

//get and set methods
contacts.set('Younes Ghorbany', '093500000');
contacts.set('Iman Madaeny', '0911000000');
contacts.set('Sajad Bagherzade', '091200000');

const iman = contacts.get('Iman Madaeny');

console.log(iman); // 0911000000

//Size Method
console.log(contacts.size);

// for(value of contacts){
//     console.log(value)  // ['Younes Ghorbany', '093500000'],['Iman Madaeny', '0911000000'],['Sajad Bagherzade', '091200000']
// } 

// but if contacts was object result had "undefined"

//clear
// contacts.clear();   //clear map values (key and value)
// console.log(contacts)

//entries
// const myContacts = contacts.entries();
// console.table(myContacts)

//forEach
contacts.forEach(value => {
    console.log(value);
});

//keys and values

// const myContacts = contacts.keys();
// console.table(myContacts)

const myContacts = contacts.values();
console.table(myContacts);

//=============================================//
//S20: SET()  Set is object with iterable capablility - Set() is constructor - new Set()
//Set likes Map , except : in set every dublicated elements amitted, this constructor suitable for Id or any uniq data ckecking
//=============================================//

// let userId = [`a1`,`b1`,`d2`,`a1`];
// let userId = new Set([`a1`,`b1`,`d2`,`a1`]);

// console.log(userId);

// userId.forEach(id => {
//     console.log(id)
// })

let userId = new Set();
console.log(userId);

const obj = {
    firstname: 'UNS',
    id: 'a1'
};

userId.add(obj);


console.log(userId);

console.log(userId.size);

//clear
//delete
//entries
// console.table(userId.entries())
//forEach
//Keys
//values
console.table(userId.keys());
//has

//=============================================//
//S21: weak map - weak set (garbeg collection managment)
//=============================================//

//WeakMap
//get,set,has,delete
//va tekrar shavande nist

// let simpleMap = new Map();
// let person1 = {name: 'Younes'};

// simpleMap.set(person1, 'good person');

// console.log(simpleMap.get(person1))

// person1 = null;

// console.table(simpleMap.entries())

// let simpleMap = new WeakMap();
// let person1 = {name: 'Younes'};

// simpleMap.set(person1, 'good person');

// console.log(simpleMap.get(person1))

// person1 = null;

// console.table(simpleMap.get(person1))

'---------------------------------------';
//WeakSet
//Terkrar Shavande Nist
//get,size always 0

const person1 = {
    name: 'bob',
    id: 1
};
const person2 = {
    name: 'rob',
    id: 1
};

let userId = new WeakSet();

userId.add(person1);
userId.add(person2);

console.log(userId.has(person2));

//=============================================//
//S22: Symbol
//=============================================//

//Boolearn,null,undefiend,Number,string,object(fuction,array)

console.log(typeof true);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);

//primitive


// const str = String('Hello World!');
// const str2 = 'Hello World!';

// console.log(str);
// console.log(str2)

// const symbol1 = Symbol('Description for developer')

// console.log(String('a') === String('a'))   //true
// console.log('a' === 'a')  //true

// console.log(Number(2) === Number(2))  //true
// console.log(2 === 2)  //true

// console.log({} === {})   //false  because objects pointed to address, object is not permative

// console.log(Symbol() === Symbol())  //false  symbol is permative but ant symbol pointed to uniqe description

// const a = Symbol();

// const b = Symbol();

// console.log(a === b);

// what is the perpuse?  mention to this exp.

// class Person{
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }

// const person1 = new Person('Younes', 27, 'Programmer');
// console.log(person1)

// person1.job = 'Developer';
// console.log(person1)

const PERSONNAME = Symbol('Person name');
const PERSONAGE = Symbol('Person age');
const PERSONJOB = Symbol('Person job');

class Person {
    constructor(name, age, job) {
        this[PERSONNAME] = name;
        this[PERSONAGE] = age;
        this[PERSONJOB] = job;
    }

    get name() {
        return this[PERSONNAME];
    }

    set name(newName) {
        this[PERSONNAME] = newName;
    }
}

const person1 = new Person('Younes', 27, 'Programmer');
console.log(person1);

person1.name = 'Iman';
console.log(person1.name);

//=============================================//
//S23: Promise And Callback
//=============================================//

Asyncronise(event loop)

// setTimeout(() => console.log('Line 1'), 0);

// console.log('Line 2');

// setTimeout(() => console.log('Line 3'), 1000);

// for (let i = 0; i < 10001; i++) {
//     if (i === 10000) {
//         console.log('Loop done!');
//     }
// }

callback

// function print(text){
//     console.log(text);
// }

// const print = function(text){
//     console.log(text)
// }

// const print = text => {
//     console.log(text)
// }

// // print('Hello World')

// const run = (callback, input) => {
//     callback(input)
// }

// run(print, 'Hello World!')

// $.('.li').click(() => {
//     console.log('Clicked')
// })

// const $ = function(selector){
//     //...
// }
// $.prototype.click = function(callback){
//     //some stuff
//     callback()
// }

'------------------------------------';
interview question:
a(x)(y)

function a(x) {
    console.log(x);
    return function (y) {
        console.log(x + y);
    };
}

a(2)(3);

//=============================================//
//S24: Promise And Callback
//=============================================//
//callback hell

// $.ajax(url1,data1) => {
//     //kari ba data anjam midam
//     $.ajax(url2, data2) => {
//         //do some work
//         $.ajax(url3, data3) => {
//             //sdsdsd
//         }
//     }
// }

'then,catch,All,race';
// promise is JS constructor

// const firstPromise = new Promise((resolve, reject) => {

//     console.log('Promise is running');
//     //some work
//     //work

//     //return data  //this data abtain by reslove from server

//     reject('error')
//     resolve('promise is resolved.')
// })
// console.log(firstPromise)

// firstPromise.then(data => {    //this data abtain by reslove from server

//     console.log(data)
// })

// firstPromise.catch(data => {
//     console.log(data);
// })

// console.log('----------------------');
// console.log('last line in the code');
// console.log('----------------------');

'-------------------------------------------';

// const someFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('1 second has passed.');
//             resolve('1 second has passed.')
//         },1000)
//     })
// }

// const simplePromise = someFunction();

// console.log(simplePromise);

// simplePromise.then(msg => {
//     console.log(msg)
// })

// <pending>

const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('1 second has passed.');
            resolve('1 second has passed.');
        }, 1000);
    });
};

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('1 second has passed.');
            resolve('2 second has passed.');
        }, 2000);
    });
};

const promiseOne = one();
const promiseTwo = two();

const promiseArray = [promiseOne, promiseTwo];

Promise.all(promiseArray).then(data => {   //.all  .then ( .then when activated that all promise work done)
    console.log(data);
});

('race');
Promise.race(promiseArray).then(data => {  //.race  .then (.then when activated that one of promise work done)
    console.log(data);
});

//=============================================//
//S25: Chaning Promises
//=============================================//

new Promise((resolve, reject) => {
    setTimeout(() => reject('Something happend.'), 1000);
    setTimeout(() => resolve(1), 1000);
})
    .then(result => {
        console.log(`Result is:${result}`); // 1
        return result * 2;
    })
    .then(result => {
        console.log(`Result is:${result}`); // 2
        return result * 2;
    })
    .then(result => {
        console.log(`Result is:${result}`); // 4
        return result * 2;
    })
    .catch(err => {
        console.log(err);
    });


//=============================================//
//S26: Proxy
//=============================================//
//Proxy ia JS constructor

// const handler = {
//     get: (target, propName) => {   //trap
//         // console.log(target);
//         // console.log(propName);

//         return target[propName]
//         // return target["name"]
//     },
//     set: (target, propName, newValue) => {  //trap
//         // console.log(target);
//         // console.log(propName);
//         // console.log(newValue);

//         if(propName == 'age'){
//             if(typeof newValue !== 'number'){
//                 throw new TypeError('Age must be a valid number.')
//             } else {
//                 target[propName] = newValue;
//             }
//         } else {
//             target[propName] = newValue;
//         }
//     },
//     has: (target, propName) => {
//         console.log('Checking.......');
//         // return false;
//         return true;
//     }
// }

// const newObj = new Proxy({}, handler);

// newObj.name = 'Younes';
// // newObj.age = 'Hello';
// newObj.age = 27;
// newObj.job= 'Developer'

// console.log(`Name: ${newObj.name}`);
// console.log(`Age: ${newObj.age}`);
// console.log(`Job: ${newObj.job}`);
// // console.log(`Address: ${newObj.address}`);

// 'has'
// if('name' in newObj){
//     console.log('I found it.')
// }

//--------------------------------------------------------------
// class Person{
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
//     printInfo() {
//         console.log(this.name, this.age, this.job);
//     }
// }

// const handler = {
//     get: (target, propName) => {
//         console.log(`Someone is trying to get ${propName} property`);
//     }
// }

// const person1 = new Person('Younes', 27, 'Developer')

// const personProxy = new Proxy(person1, handler);

// console.log(person1.name)
// console.log(personProxy.name)

//---------------------------------------------------------------
'apply';

const sum = (x, y) => {
    return x + y;
};

const handler = {
    apply: (target, thisArg, argsList) => {
        // console.log(target);
        // console.log(thisArg);
        // console.log(argsList);
        // return target(argsList[0], argsList[1]) * 100;
        return target(argsList[0], argsList[1]) * 100;
    }
};

const sumProxy = new Proxy(sum, handler);

console.log(sum(2, 9));
//Middleware
console.log(sumProxy(2, 9));

//=============================================//
//S27: Reflect  (prevent silent errors)
//=============================================//

// console.log(typeof 1);
// console.log(typeof data)
// Reflect()  //is global object and it's not need to create new Reflect, it's like Math method
// new Reflect

console.log(Math.random());
console.log(Math.floor(Math.random() * 30));

const x = {
    a: 1,
    b: 2
};

console.log(Reflect.get(x, 'a'));
// console.log(1.a)

const arr = ['Younes', 'Iman', 'Sajad'];

console.log(Reflect.get(arr, 0));  //sajad

const obj = {
    name: 'Younes'
};

console.log(obj.hasOwnProperty('name')); //true 

console.log('name' in obj); //true 

console.log(Reflect.has(obj, 'name')); //true 


//=============================================//
//S27: generators  ()
//=============================================//

// function* generator1(){
//     console.log('Line 1');
//     yield 1; // PAUSE
//     console.log('Line 2')
// }

// // generator1()
// const gen = generator1();
// console.log(gen);

// gen.next()
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next();
// gen.next()

//---------------------------------------

function* counter() {
    let i = 0;
    // console.log(Infinity)
    while (true) {
        console.log('Before yield');
        // yield i++; //PAUSE
        i++;
        console.log(i);
        const reset = yield i;
        if (reset) {
            i = 0;
        }
        console.log('After yield');
    }
}

const counter1 = counter();
console.log(counter1);
counter1.next();
counter1.next();
counter1.next();
counter1.next(true);
counter1.next();
counter1.next();
counter1.next();


//=============================================//======================= Not Important
//S29: Iterables and iterators  
//=============================================//

'Iterables and iterators';

//Arrays,Map,WeakMap,String,Set,WeakSet

// const string1 = 'Hello World!';
// //for...of

// console.log(string1[Symbol.iterator])

// for(let letter of string1){
//     console.log(letter)
// }

// const obj = {
//     *[Symbol.iterator](){
//         yield 1;
//         yield 2;
//         yield 3;
//     },
//     name :'Younes'
// }

// console.log(obj[Symbol.iterator])

// for(let name of obj){
//     console.log(name)
// }

// console.log([...obj])

'---------------------------------------------------';

// const string1 = new String('Hello World');
// string1.next()
// console.log(string1[Symbol.iterator]().next())

// string1[Symbol.iterator] = function() {
//     //return object = iterator object
//     //it must have next() property
//     return {
//         allDone: false,
//         counter: 0,
//         next: function() {
//             if (!this.allDone) {
//                 this.counter++;
//                 if(this.counter === 6){
//                     this.allDone = true;
//                 }
//                 return {
//                     value: 'Toplearn',
//                     done: false
//                 };
//             } else {
//                 return {
//                     done: true
//                 };
//             }
//         }
//     };
// };

// for (let letter of string1) {
//     console.log(letter);
// }

'------------------------------------------------------';

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    return {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        }
    };
}

let it = makeRangeIterator(1, 90, 3);

let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}

console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]


//=============================================//======================= ES7
//S30: 
//=============================================//
//ES7

// const a = 2 * 2 * 2 * 2 * 2
// const a = 3 ** 2.5
// const a = 2 ** (3 ** 2);
// const c = (2 ** 3) ** 2;
// console.log(a);
// console.log(c)

// //Python and php
// const b = 2 ** 5
// console.log(b)

// const d = -(2 ** 5);
// console.log(d)

'-----------------------------------------';
//Includes
//return boolean
//indexOf

// const arr = [1,2,3,4,5]
// // if(arr.indexOf(29) > -1){
// //     console.log('Number is found')
// // }else {
// //     console.log('Number is not found')
// // }

// if (arr.includes(29)) {
//     console.log('Number is found');
// } else {
//     console.log('Number is not found');
// }

'-------------------------------------------';
//Destructuring Rest operators

// const data = {
//     name: 'Younes',
//     age: 27,
//     job: 'Developer'
// }

// const name = data.name;
// const age = data.age;
// const job = data.job;

// const {name ,age, job} = data;

// const sum = (...numbers) => {
//     console.log(numbers);
//     return numbers[0] + numbers[1]
// }

const sum = (...[a, b]) => {
    console.log(a, b);
    return a + b;
};

console.log(sum(2, 3));


//=============================================//======================= ES7
//S31: 'Async && Await'
//=============================================//

'Async && Await';

const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Done!');
            resolve('2 second have passed!.');
        }, 2000);
    });
};

async function two() {
    console.log('Calling function one()');
    // one().then(result => {
    //     console.log(result);
    // })
    const oneResponse = await one();
    console.log(oneResponse);
}

// const two = async () => {

// }

two();

console.log('Last line of code.');

//=============================================//======================= ES8
//S32: Object.values() and Object.entries()
//=============================================//

//ES8

//Object.values() and Object.entries()

// const user = {
//     fullname: 'Younes Ghorbany',
//     age: 27,
//     job: 'Developer'
// }

// const userValues = Object.values(user);

// // const userValues = [];
// // for(prop in user){
// //     userValues.push(user[prop]);
// // }

// console.log(userValues)

// const userEntries = Object.entries(user);

// console.log(userEntries);
// console.log(userEntries[0][1]);

'-----------------------------------------------------';

//str.padStart and str.padEnd

// const name = 'Younes Ghorbany'

// console.log(name.padEnd(25,) + 'test');
// console.log(name)

// console.log(name.padStart(25,))

'------------------------------------------------------';
//Object.getOwnPropertyDiscriptos()

// const user = {
//     fullname: 'Younes Ghorbany',
//     age: 27,
//     job: 'Developer'
// };

// const descriptors = Object.getOwnPropertyDescriptors(user);
// console.log(descriptors);

'-----------------------------------------------------';

//ES1
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);

//ES5

const obj = { name: 'Younes', age: 27 };
console.log(obj);

//ES8

const sum = (x, y) => {
    return x + y;
};

console.log(sum(2, 3));
