//Qustion 1
//The class movie stated below.
// An instance of class movie represent a flim.
//This class has the following three proerties:

// title, which is a string representing the tittle of the movie
// studio, which is a string reresenting the studio that made the movie
// rating, which is a string reresenting the rating of the movie(i.e.PG-13,R,etc)

//a).Write a constructor for the class movie, which takes a string representing the title of the movie,
// a string representing the studio, and a string representing the rating as its arguments
//and set the resective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” 


class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
 var movie1 = new Movie("Casino Royale", "Eon Production", "PG13");
 var movie2 = new Movie("Casino Royale", "Eon Production");


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);

