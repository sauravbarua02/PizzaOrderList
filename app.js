
//constructor and method in JS
const displayEl = document.getElementById("display");

function Order(pizzaType, size,topping, price){
    this.pizzaType = pizzaType;
    this.size = size;
    this.topping = topping;
    this.price = price;
    this.display = function (){
        displayEl.innerText = `You have ordered ${this.size} sized ${this.pizzaType} pizza with ${this.topping} toppings and price is ${this.price} BDT`;
    }
}

let order1 = new Order("Margarita", "Medium", ["Tomato","Jelapino"], 800);
let order2 = new Order("BBQ", "large", ["Cheese","Bacon"], 1300);
let order3 = new Order("Seafood", "small", ["Shirmp","Oester"], 600);

order2.display();
