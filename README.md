# Nests

#### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print all values to the console.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
```

#### 2. Doggo

* 2.1 Create an object named `doggo`. Add `name` and `breed` properties to the object.
* 2.2 Create an array in the `favoriteFoods` property of the `doggo` object and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method named `showFavorites` that loops through and prints all the doggo's favorite foods.

#### 3. Recipe
* 3.1 Create an object named `recipe`. Add `name` and `preparationTime` properties to the object.
* 3.2 Inside this object, you should create another object in the `ingredients` property and store ingredients and amounts as properties: butter, sugar, flour etc. Each property should have a string as its value. Example:
  ```js
     {
      butter: '1 tbsp' 
     }
  ```
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger` with amount(value) '1 tsp'. 
* 3.4 Change the amount(value) of ingredient `ginger` to `2 tsp`. 
* 3.5 Write a method in the recipe object named `showIngredients` that prints each ingredient and amount from the ingredients object to the console.