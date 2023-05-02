const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
    res.send('Cook is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id === 0) {
        res.send(recipes)
    }
    else {
        const categoryChef = recipes.filter(recipe => recipe.id == id)
        res.send(categoryChef)
    }
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})
app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedRecipe = recipes.find(recipe => recipe.id == id)
    res.send(selectedRecipe)
})


app.listen(port, () => {
    console.log(`Cook is running on port: ${port}`)
})