// class Sorter {
//   collection: number[];

//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// sort(): void {}
// }

// class Sorter {
//   constructor(public collection: number[] | string) {}

//   sort(): void {
//     const { length } = this.collection;

//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         //? All of this only works if collection is number[]
//         // If collection is an array of numbers
//         if (this.collection instanceof Array) {
//           if (this.collection[j] > this.collection[j + 1]) {
//             const leftHand = this.collection[j];
//             this.collection[j] = this.collection[j + 1];
//             this.collection[j + 1] = leftHand;
//           }
//         }

//         //? Only going to work if collection is a string
//         // If collection is a string, do this logic instead:
//         // ~~~logic to compare and swap characters in a string
//         if (typeof this.collection === 'string') {
//           this.collection.
//         }
//       }
//     }
//   }
// }

import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

console.log('here', linkedList);

const sorter = new Sorter(linkedList);
console.log(sorter);
sorter.sort();
linkedList.print();
