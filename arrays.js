'use strict';
//Erin
// // 1. printIndices
// function printIndices(items) {
//   //loop over indices
//   //For (const i in states) {
//   //console.log(i);
//   //console.log(states[i]);
//     for (const item in items) {
//       const itemIndex = items[item]
//     console.log(itemIndex, item)
//   }
// }
  
//printIndices(['tree', 'dog', 'cat', 'frog'])

// 2. everyOtherItem
//append -> .push()
//for loop -> for (let i = 0; i < array.length; i+2) <-- that's one way
//better way -> for i in range(len(items)):

//Emily

// function everyOtherItem(items) {
//   let evenIndexedArrayItems = [];
  
//   for (const itemsIndex in items){
//     //access the index of each item and check if item's index is even
//     if (itemsIndex % 2 == 0){
//       //if it is even, then push the item to the results list
//       evenIndexedArrayItems.push(items[itemsIndex])

//     }

//   }
//   return evenIndexedArrayItems
// }
// console.log(everyOtherItem([true, 5, false, "notThis"]))


// 3. smallestNItems

//def smallest_n_items(items, n):
    // """Print a list of the `n` smallest integers in `items`.

    // Order the integers in descending order.

    // You can assume that `n` will be less than the length of the list.

    // Arguments:
    //     items (list[int]): A list of integers
    //     n (int): Desired length for the resulting list
    // """

    // sorted_items = sorted(items)
    // sorted_n_items = sorted_items[:n]
    // sorted_n_items.reverse()

    // print(sorted_n_items)

    //how to slice Slice python: s[start:end] | javascript: s.slice(start, end) SLICE IS NOT INCLUSIVE 
    //how to reverse, reverse()
    //How to sort numbers with Array.prototype.sort
      //> const nums = [1, 30, 4, 21, 100000];
      //> nums.sort((a, b) => a - b);
      //[1, 4, 21, 30, 100000]

    
    // [1, 30, 4, 21, 100000] -> [1, 4, 21, 30, 100000]

    //NOTE: REFERENCEERROR: ITEMSSORTED IS NOT DEFINED -> VARIABLE ISN'T WORKING RIGHT THEREFORE WE NEEDED TO DECLARE WITH LET OR CONST

function smallestNItems(items, n) {
  //create a sorted list
  const itemsSorted = items.sort((a, b) => a - b);

  //slice array at n endpoint?
  const slicedItems = itemsSorted.slice(0, n);

  //reverse array after slicing
  const reversedItems = slicedItems.reverse();

  return reversedItems
}
console.log(smallestNItems([1,4,6,89,3,-2,2.3,5], 6))