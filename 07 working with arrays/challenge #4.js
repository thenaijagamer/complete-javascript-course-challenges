/**Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little.
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) �
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects �)
The Complete JavaScript Course 26
Hints:
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them �
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion.
Test data:
 const dogs = [
 { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
 { weight: 8, curFood: 200, owners: ['Matilda'] },
 { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
 { weight: 32, curFood: 340, owners: ['Michael'] },
 ];
GOOD LUCK  */

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

console.log("1_________________________");
// 1
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

console.log("\n2_________________________");
// 2
const sarahsDog = dogs.find((dog) =>
  dog.owners.find((owner) => owner === "Sarah")
);

if (sarahsDog.curFood > sarahsDog.recommendedFood * 1.1)
  console.log("Eating too much");
else if (sarahsDog.curFood < sarahsDog.recommendedFood * 0.9)
  console.log("Eating too little");
else console.log("Eating normal");

console.log(
  sarahsDog.curFood > sarahsDog.recommendedFood * 1.1
    ? "Eating too much"
    : sarahsDog.curFood < sarahsDog.recommendedFood * 0.9
    ? "Eating too little"
    : "Eating normal"
);

console.log("\n3_________________________");
// 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners);

console.log("ownersEatTooMuch: ", ownersEatTooMuch);
console.log("ownersEatTooLittle: ", ownersEatTooLittle);

console.log("\n4_________________________");
// 4
console.log(ownersEatTooMuch.join(" and ") + "'s dog eat too much");
console.log(ownersEatTooLittle.join(" and ") + "'s dog eat too little");

console.log("\n5_________________________");
// 5
console.log(dogs.some((dog) => dog.curFood == dog.recommendedFood));

console.log("\n6_________________________");
// 6
console.log(
  dogs.some(
    (dog) =>
      dog.curFood < dog.recommendedFood * 1.1 &&
      dog.curFood > dog.recommendedFood * 0.9
  )
);

console.log("\n7_________________________");
// 7
const dogsOkay = dogs.filter(
  (dog) =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9
);

console.log(dogsOkay);

console.log("\n8_________________________");
// 8
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
