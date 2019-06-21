
let driverId=0
class Driver{
   constructor(name) {
        this.id = ++driverId;
        this.name = name;
 
        // insert in the user to the store
        //store.users.push(this);
        return this
    }
}

let passengerId=0
class Passenger{
   constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        // insert in the user to the store
        //store.users.push(this);
        return this
    }
}

let tripId=0
class Trip{
   constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId=driver.id
        this.passengerId=passenger.id
        
        return this
        // insert in the user to the store
        //store.users.push(this);
    }
}








