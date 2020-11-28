//To create a constructor function, we use new keyword.

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time)
    };
    this.driverName = function(){
        console.log("Driver name is" + '' + this.driver)
    };
}
var myCar = new Car(50, "Abhishek")
var myCar2 = new Car(60, "Ashu")
var myCar3 = new Car(45, "Ashutosh")
var myCar4 = new Car(70, "Satyam")
var myCar5 = new Car(80, "Shivam")

myCar.drive(45, 6)
myCar4.driverName()
myCar5.drive(50,5)