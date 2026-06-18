/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/**
 * @type {Item[]}
 * You can use this example array to test your functions.
 */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 3, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 5, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 91, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 47, name: "carrots", price: 2.25, category: "vegetable", quantity: 94 },
  { id: 82, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 6, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 101, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

/**
 * @param {Item[]} items
 * @returns {number[]} ids of given items
 */
function getIds(items) {
  let result = [];
  /*for (let i = 0; i < items.length; i++) {
    result.push(items[i].id);
  }*/
  /*for (let i of items) {
    result.push(i.id);
  }*/
  items.forEach((item) => result.push(item.id));

  return result;
}

//console.log(getIds(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {string[]} categories of given items
 */
function getCategories(items) {
  let result = [];
  /*for (let i = 0; i < items.length; i++) {
    result.push(items[i].category);
  }*/
  for (let i of items) {
    result.push(i.category);
  }

  return result;
}

//console.log(getCategories(INVENTORY));

/**
 * Vendors often use SKUs (Stock Keeping Units) to manage their inventory.
 * SKU formats are not standardized, so for this exercise, we will use the format
 * "[id]#[name]#[name length]"
 *
 * For example, the SKU of `{id: 91, name: "broccoli"}` would be "91#broccoli#8"
 * @param {Item[]} items
 * @returns {string[]} SKUs of given items
 */
function getSkus(items) {
  let skus = [];
  /*for (let i = 0; i < items.length; i++) {
    skus.push(`${items[i].id}#${items[i].name}#${items[i].name.length}`);
  }*/
  for (let i of items) {
    skus.push(`${i.id}#${i.name}#${i.name.length}`);
  }
  return skus;
}

//console.log(getSkus(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {Item[]} all items in the "fruit" category
 */
function getFruits(items) {
  /*let itemArr = [items];
  let result = itemArr.filter((item) => itemArr.category == "fruit");
  return result;*/
  let result = (item) => item.category == "fruit";
  return items.filter(result);
}

//console.log(getFruits(INVENTORY));

/**
 * @param {Item[]} items
 * @param {string} category
 * @returns {Item[]} all items in the given category
 */
function getItemsByCategory(items, category) {
  let result = (item) => item.category == category;
  return items.filter(result);
}

//console.log(getItemsByCategory(INVENTORY, "dairy"));

/**
 * An item is considered "cheap" if its price is $2.50 or less.
 * @param {Item[]} items
 * @returns {Item[]} all cheap items
 */
function getCheapItems(items) {
  let result = (item) => item.price <= 2.5;
  return items.filter(result);
}
//console.log(getCheapItems(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {number} the total quantity of all items given
 */
function countItems(items) {
  let result = 0;
  for (let i of items) {
    result += i.quantity;
  }
  return result;
  /*let result = (totalQuant, itemQuant) => totalQuant + itemQuant.quantity;
  return items.reduce(result, 0);*/
}

//console.log(countItems(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {number} the cost of purchasing every single item
 */
function getTotalCost(items) {
  let cost = 0;
  for (let i of items) {
    cost += i.quantity * i.price;
  }
  return cost;
}
//console.log(getTotalCost(INVENTORY));

/**
 * @param {Item[]} items
 * @returns {Item} the item with the highest price
 */
function getMostExpensiveItem(items) {
  let bigBucks = {
    price: 0,
  };
  for (let i of items) {
    if (i.price > bigBucks.price) {
      bigBucks = i;
    }
  }
  return bigBucks;
}
//console.log(getMostExpensiveItem(INVENTORY));
