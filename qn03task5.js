//Question 3 : Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Poongulali", "Sekar", "27-01-1989" , "Salem");
var person2 = new Person("Mowni", "Dhekshana", "10-01-2015" , "Kodaikaanal");
var person3 = new Person("Sekar", "Chanthiran", "08-02-1964" , "Attur");
var person4 = new Person("Prathab", "Chanthiran", "04-11-2016" , "Ooty");
var person5 = new Person("Sundharam", "Pillai", "24-11-1956" , "Chennai");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)

/*----------------------------------------------------------------------------------------------------*/
