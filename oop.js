//class
class animal {
domesticAnimal= 'cat'
wildAnimal = 'lion'
twoLeggedAnimal = 'chicken'

static fourLeggedAnimal = 'dog'
static nightAnimal = 'owl'

//adding Methods. a method is a function written inside a class

roar (){
    console.log('lion roars')
}

displayDomesticAnimal(){
    console.log(this.domesticAnimal)
    this.roar()
}

//accdssing static
pet(){
   console.log( animal.fourLeggedAnimal)
}
}

//object
const Animal= new animal()

Animal.displayDomesticAnimal()
Animal.pet()

//updating an object
Animal.wildAnimal='tiger'
Animal.domesticAnimal= 'goat'


console.log(Animal)


// console.log(animal)