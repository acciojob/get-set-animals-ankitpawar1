class Animal {
    constructor(species) {
        this._species = species;
    }
    
    // Getter for the species
    get species() {
        return this._species;
    }

    // Method that logs a general sound an animal makes
    makeSound() {
        let sound = `The ${this.species} makes a sound.`;
        console.log(sound);
        return sound;
    }
}

// Cat class that extends Animal
class Cat extends Animal {
    // Cat-specific purr method
    purr() {
        let purrSound = "purr";
        console.log(purrSound);
        return purrSound;
    }
}

// Dog class that extends Animal
class Dog extends Animal {
    // Dog-specific bark method
    bark() {
        let barkSound = "woof";
        console.log(barkSound);
        return barkSound;
    }
}

// Create instances of Cat and Dog
const myCat = new Cat("Siamese");
const myDog = new Dog("Golden Retriever");

// Grab the animalSounds div
const animalSoundsDiv = document.getElementById('animalSounds');

// Append the animal sounds to the animalSounds div
animalSoundsDiv.innerHTML += `<p>${myCat.makeSound()}</p>`;
animalSoundsDiv.innerHTML += `<p>${myCat.purr()}</p></br>`;
animalSoundsDiv.innerHTML += `<p>${myDog.makeSound()}</p>`;
animalSoundsDiv.innerHTML += `<p>${myDog.bark()}</p>`;

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;