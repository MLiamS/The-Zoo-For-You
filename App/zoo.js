var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Animal;
}());
var animals = [];
animals.push(new Animal('Tiger', 'Sam', 7, 'Burgers', 'Mexico', 'Children(unprepared)', 'male', 'Big-Macs', 'Broccoli'));
console.log(animals);
//# sourceMappingURL=zoo.js.map