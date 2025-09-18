const express= require('express');
const routes = express.Router();

let pizzas = [
    {
        "id":1,
        "name": "Margherita",
        "description": "Classic pizza with tomato sauce, mozzarella, and basil",
        "price": 12.99,
        "category": "Vegetarian",
        "ingredients": ["tomato sauce", "mozzarella", "basil"],
        "available": true
    },
    {
        "id":2,
        "name": "Pepperoni",
        "description": "Popular pizza topped with pepperoni slices and cheese",
        "price": 14.99,
        "category": "Non-Vegetarian",
        "ingredients": ["tomato sauce", "mozzarella", "pepperoni"],
        "available": true
    },
    {
        "id":3,
        "name": "BBQ Chicken",
        "description": "Pizza with BBQ sauce, grilled chicken, red onions, and cilantro",
        "price": 15.99,
        "category": "Non-Vegetarian",
        "ingredients": ["BBQ sauce", "mozzarella", "grilled chicken", "red onions", "cilantro"],
        "available": false
    },
    {
        "id":4,
        "name": "Veggie Delight",
        "description": "Loaded with fresh vegetables like bell peppers, olives, and mushrooms",
        "price": 13.99,
        "category": "Vegetarian",
        "ingredients": ["tomato sauce", "mozzarella", "bell peppers", "olives", "mushrooms"],
        "available": true
    }
];

routes.post('/', (req, res) => {
    pizzas.push(
        {
            "id": parseInt(req.query.id),
            "name": req.query.name,
            "description": req.query.description,
            "price": parseInt(req.query.price),
            "category": req.query.category,
            "ingredients": req.query.ingredients.split(","),
            "available": true
        }
    );
    res.send(`Pizza with name ${req.query.name} and id ${req.query.id} added successfully`);
});

routes.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let filtered_pizzas = pizzas.filter(u => u.id === id);
    if (filtered_pizzas.length > 0){
        let filtered_pizza = filtered_pizzas[0];
        let name = req.query.name;
        let description = req.query.description;
        let price = req.query.price;
        let category = req.query.category;
        let ingredients = req.query.ingredients;
        let available = req.query.available;
        if(name){
            filtered_pizza.name = name;
        }
        if(description){
            filtered_pizza.description = description;
        }
        if(price){
            filtered_pizza.price = parseInt(price);
        }
        if(category){
            filtered_pizza.category = category;
        }
        if(ingredients){
            filtered_pizza.ingredients = ingredients.split(",");
        }
        if(available){
            filtered_pizza.available = (available.toLowerCase() === 'true');
        }
        
        pizzas=pizzas.filter((pizza) => pizza.id != id);
        pizzas.push(filtered_pizza);
        res.send(`Pizza with the id  ${id} updated.`);
    }else{
        res.send(`Pizza with the id  ${id} not found.`);
    }
});

routes.get('/',(req,res)=>{
    res.send(pizzas);
});

routes.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const pizza = pizzas.filter(u => u.id === id );
    if (pizza.length === 0) {
        return res.status(404).send(`Pizza with the id  ${id} not found.`);
    }
    else{
        res.send(pizza);
    }
});

routes.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    pizzas = pizzas.filter(u => u.id !== id);

    if ((pizzas.filter(u=> u.id === id).length === 0)) {
        return res.status(404).send(`Pizza with the id  ${id} not found.`);
    }
    else{
        res.send(`Pizza with id ${id} deleted successfully`);
    }
});

module.exports=routes;