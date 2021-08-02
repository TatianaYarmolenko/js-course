
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
// console.log(key);  
// console.log(apartment[key]);
// } 

// const type = typeof 5;
// console.log(type);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) 
// {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//   console.log(keys[key]);
//  }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (let i = 0; i < object.length; i += 1) {
//   propCount += i;
//   console.log(object)
// }
//   // Change code above this line
//   return propCount;
// }

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (let i = 0; i < object.length; i++) {
//   console.log(object[i])
//   propCount += object[i];
// }
//   // Change code above this line
//   return propCount;
// }


// let user = {
//   name: 'John',
//   age: 31
// }

// alert(user.age);
// alert(user.name);


// const name = 'Oleg';
// console.log(name);

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(typeof result);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let totalPrice = 0;
//   for (let i = 0; i < products.length; i++) {
//    const prod = products[i] 
//   totalPrice = prod.price * prod.quantity;
//   }

// return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice("Scanner"));

// const FnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback();
// }

// const fnB = function () {
//   console.log('Это лог');
// }
//  FnA('dgdrgr', fnB);

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return this.discount ;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// const getUsersWithAge = (users, minAge, maxAge) => {
//   maxAge.indexOff(users) > minAge;
//   return users.filter(user => user.age);
// };

// const numbers = [1, 2, 3, 4, 5, 6]
// const oddNumbers = numbers.filter(n => n % 2 !== 0)
// console.log(oddNumbers) // [1, 3, 5]

// const numbers = [1, 2, 3, 4, 5, 6]
// const oddNumbers = numbers.filter(n => n % 2 !== 0)
// console.log(oddNumbers)

// const numbers = [1, 2, 3, 4, 5, 6]
// const oddNumber = numbers.filter(n => n % 2 !== 0)
// console.log(oddNumber);

// const participants = [
//   { id: 'a3f47', username: 'john' },
//   { id: 'fek28', username: 'mary' },
//   { id: 'n3j44', username: 'sam' },
//  ]
 
//  function removeParticipant(participants, id) {
//   return participants.filter(participant => participant.id !== id)
//  }
 
//  console.log(removeParticipant(participants, 'a3f47'))

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];



// // const doubled = numbers.map(x => x * 2);

//  const reversed = numbers.reverse();

// console.log(reversed);

const getUsersWithAge = (users, minAge, maxAge) => {
    
  return users.filter(user => user.age.includes(minAge, maxAge));
    
};

