/*
console.log("destructuring");

const person = {
    age: 38,
    location: {
        city: 'Caracas',
        temp: 32
    }
};

const {name, clsName = "Anonymous", age} = person;
//Destructuring
const {city, temp: temperature} = person.location;

console.log(`${name} is ${age}, with default: ${clsName}`);
if (city && temperature){
    console.log(`${city} is ${temperature} degrees`);
}
*/
/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = "Self-Published", author} = book;
//Destructuring
const {name} = book.publisher;
console.log(`${publisherName} from: ${author}`);
*/

//Array Destructuring
/*
const address = [
    '1299 S Juniper Street', 'Caracas', 'Miranda', '1083'
];

const [street, city, state, zip, other = 'Crazy...'] = address;
console.log(`You are in ${city}, ${state} ${zip} ${other}`);


const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75']
const [itemName, , medium] = item;
console.log(`Medium Coffee costs ${medium}`);
*/