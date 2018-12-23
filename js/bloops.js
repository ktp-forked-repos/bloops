var Food = function(position, radius, energy) {
    this.position = position;
    this.x = position.x;
    this.y = position.y;
    this.r = radius;
    this.energy = energy;
};


var Creature = function(position, radius, energy, genome) {
    this.position = position;
    this.r = radius;
    this.energy = energy;
    this.genome = genome;
};

Creature.prototype.update = function() {
};


var World = {
    // Default values
    width: 100,
    height: 100,

    foodR: 2,
    foodEnergy: 100,
    foodGrowthRate: 0.1,

    creatures: [],
    food: [],

    init: function(params) {
        for (var param in params) {
            this[param] = params[param];
        }
    },

    addFood: function(n) {
        n = n || 1;
        for (var i = 0; i < n; i++) {
            var newFood = new Food(this.getRandomPosition(), this.foodR, this.foodEnergy);
            this.food.push(newFood);
        }
    },

    addCreature: function() {

    },

    getRandomPosition: function() {
        return {
            x: Math.random() * this.width,
            y: Math.random() * this.height,
        };
    },

    update: function() {
        // Grow food
        while (Math.random() < this.foodGrowthRate) {
            this.addFood();
        }

        // Update creatures
        for (var i = 0; i < this.creatures.length; i++) {
            this.creatures[i].update();
        }
    }
};
