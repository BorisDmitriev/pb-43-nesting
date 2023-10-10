//1
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (const arr of board) {
    for (const item of arr) {
        console.log(item);
    }
}

const doggo = {
    name: "Bill",
    breed: "pug",
    favoriteFoods: ["meat", "carrots"],
    showFavorites: function () {
        for (const food of this.favoriteFoods) {
            console.log(food);
        }
    }
};
console.log(doggo.favoriteFoods[1]);
console.log('************************');
doggo.showFavorites();

//3
const recipe = {
    name: 'porridge',
    preparationTime: '10 Minutes',
    ingredients: {
        butter: 'butter',
        sugar: 'sugar',
        butter: 'porride',
        honey: 'honey'
    },
    showIngredients: function() {
        for (const key in this.ingredients) {
            console.log((this.ingredients[key]));
        }
    },
};
recipe.ingredients.ginger = 'ginger';
recipe.ingredients.ginger = 'grated ginger';
console.log('*******Test showIngredients()*************');
recipe.showIngredients();