// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

///////////////////////////
const createInstructor = (firstName, lastName) => {firstName, lastName};

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }


///////////////////////////
let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

///////////////////////


  const instructorr = {
    firstName: "Colt",
      sayHi(){
      return "Hi!";
    },
      sayBye(){
      return this.firstName + " says bye!";
    }
  }


////////////////////////////

const createAnimal = (species, verb, noise) => {
   return {
        species,
        verb,
        noise
    }
}

// console.log(createAnimal("sheep", "bleet", "BAAAAaaaa"));

