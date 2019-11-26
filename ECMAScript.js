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