class Animal {

constructor(
  public species: string,
  public name: string,
  public age: number,
  public diet: string,
  public location: string,
  public caretakers: string,
  public sex: string,
  public likes: string,
  public dislikes: string) {}
}

var animals: Animal[] = [];
animals.push(new Animal('Tiger', 'Sam', 7, 'Burgers', 'Mexico', 'Children(unprepared)', 'male', 'Big-Macs', 'Broccoli'));
console.log(animals);
