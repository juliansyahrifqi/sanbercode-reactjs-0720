// Soal No. 1

const newFunction = function literal(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(firstName, lastName);
            return;
        }
    }
}

newFunction("Wiliam", "Imoh").fullName();

// Soal No. 2

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!1"
};

const {
    firstName,
    lastName,
    destination,
    occupation,
    spell
} = newObject;

console.log(firstName, lastName, destination, occupation);


// Soal No. 3

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);