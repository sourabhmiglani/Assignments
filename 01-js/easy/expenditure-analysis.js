/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const expense = new Map();
  for(let i = 0;i < transactions.length;i++){
    if(expense.has(transactions[i].category))
  expense.set(transactions[i].category,expense.get(transactions[i].category) + transactions[i].price); 
  else{
    expense.set(transactions[i].category,transactions[i].price);
  }  
}
  let ans = [];
  for(let[key,value] of expense){
    const obj = {category:key,totalSpent:value};
    //console.log(obj);
    ans.push(obj);
  }
  return ans;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];
    console.log(calculateTotalSpentByCategory(transactions));
    
module.exports = calculateTotalSpentByCategory;
