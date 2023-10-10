const rewire = require("rewire");
const solution = rewire("../index.js");

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
const sol = require('../index');

describe('1. 2D Array',()=>{
  test('All values of sub-arrays are printed to console',()=>{
    const board = solution.__get__('board');
    board.forEach(ele=>ele.forEach(subEle=>expect(console.log).toHaveBeenCalledWith(subEle)))  
  })
})

describe('2. Doggo',()=>{
  test('`doggo` object has `name` and `breed` properties', () => {
    const doggo = solution.__get__('doggo');
    expect(doggo).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        breed: expect.any(String)
      })
    );
  });
  test("`doggo` object has `favoriteFoods` property containing array of strings", () => {
    const doggo = solution.__get__('doggo');
    expect(doggo).toEqual(
      expect.objectContaining({
        favoriteFoods: expect.arrayContaining([expect.any(String)])
      })
    );
  });
  test("Access and log the second element of doggo's favorite foods",()=>{
    const doggo = solution.__get__('doggo');
    expect(console.log).toHaveBeenCalledWith(doggo.favoriteFoods[1])
  });
  test("`doggo` object has `showFavorites` method that loops through favorite foods and prints them to the console", () => {
    const doggo = solution.__get__('doggo');
    doggo.showFavorites();
    doggo.favoriteFoods.forEach(ele=>expect(console.log).toHaveBeenCalledWith(ele))
  });
})

describe('3. Recipe',()=>{
  test('`recipe` object has `name` and `prepatationTime` properties', () => {
    const recipe = solution.__get__('recipe')
    expect(recipe).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        preparationTime: expect.anything()
      })
    );
  });
  test('`recipe` object has `ingredients` property containing object with ingredients',()=>{
    const recipe = solution.__get__('recipe')
    expect(typeof recipe.ingredients === 'object').toBe(true);
  });
  test("'ginger' was added as property to `ingredients` of `recipe`", () => {
    const recipe = solution.__get__('recipe')
    expect(typeof recipe.ingredients.ginger !== undefined).toBe(true)
  });
  test("Value of `ginger` in `ingredients` was changed",()=>{
    const recipe = solution.__get__('recipe')
    expect(recipe.ingredients.ginger).not.toBe("1 tsp")
  })
  test("`recipe` has `showIngredients` method that prints the value of each ingredient in the `ingredients` object to the console",()=>{
    const recipe = solution.__get__('recipe')
      recipe.showIngredients()
      // get all values of console.log
      const consoleValues = consoleSpy.mock.calls.map((arr) => arr[0]);
      // get all values of ingredients
      const ingredientsValues = Object.values(recipe.ingredients);
      // compare both arrays
      expect(consoleValues).toContain(...ingredientsValues);
  })
})
