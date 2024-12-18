const fruits = ["goa", "banana", "pineapple"];
const persons = ["ram", "saran", "divya", 'divya'];

const fruitcollection = function (fruits) {
  let index = -1;

  return function (person) {
    index++;

    if(index >= 3) {
      index = 0 ;
    }

    return person + " " + fruits[index];
  }
}

const cycle = function () {
 const func = fruitcollection(fruits);
 return persons.map(func);
}

console.log(cycle());