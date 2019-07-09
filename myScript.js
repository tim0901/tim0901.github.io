function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = eye;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
};

var dad = new Person("John","Doe", 50, "Blue");
var mum = new Person("Sally","Rally", 48, "Green");

function myFunction(){
    document.getElementById("demo").innerHTML = dad.fullName + " " + mum.fullName;
}