const rewire = require("rewire");
const solution = rewire("../index.js");

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
const sol = require('../index');

describe('1. Loop 2D Array',()=>{
  test('Loop through all subarrays',()=>{
    const board = solution.__get__('board');
    board.forEach(ele=>ele.forEach(subEle=>expect(console.log).toHaveBeenCalledWith(subEle)))  
  })
})

describe('2. Create Object Doggo',()=>{
  const doggo = solution.__get__('doggo');
  test('Add name and breed as properties of the object', () => {
    expect(typeof doggo.name !== undefined).toBe(true);
    expect(typeof doggo.breed !== undefined).toBe(true);
  });
  test("Create an array within the doggo object named favoriteFoods and add the doggo's favorite foods to the array", () => {
    expect(typeof doggo.favoriteFoods.length !== undefined).toBe(true);
  });
  test("Access and log the second element of doggo's favorite foods",()=>{
    expect(console.log).toHaveBeenCalledWith(doggo.favoriteFoods[1])
  });
  test("Add a method called showFavorites that loops through and print all the doggo's favorite food", () => {
    doggo.showFavorites();
    doggo.favoriteFoods.forEach(ele=>expect(console.log).toHaveBeenCalledWith(ele))
  });
})

describe('3. Object recipe',()=>{
  const recipe = solution.__get__('recipe')
  test('Have name and prepatationTime properties', () => {
    expect(typeof recipe.name !== undefined).toBe(true);
    expect(typeof recipe.prepatationTime !== undefined).toBe(true);
  });
  test('Inside recipe, create another object for ingredients',()=>{
    expect(typeof recipe.ingredients === 'object').toBe(true);
  });
  test("Add another ingredient - let's add ginger.", () => {
    expect(typeof recipe.ingredients.ginger !== undefined).toBe(true)
  });
  test("Change te value of property ginger",()=>{
    expect(recipe.ingredients.ginger !== "ginger").toBe(true)
  })
  test("Write a method in the recipes object called showIngredients that prints the value of each ingredient in the ingredients object",()=>{
      recipe.showIngredients()
      Object.values(recipe.ingredients).forEach(ele=> expect(console.log).toHaveBeenCalledWith(ele))
  })
})
