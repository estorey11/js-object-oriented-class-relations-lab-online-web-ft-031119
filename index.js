let store = { drivers: [], passengers: [], trips: [] };


let driverId=0
class Driver{
  
   constructor(name) {
        this.id = ++driverId;
        this.name = name;
 
        // insert in the user to the store
        store.drivers.push(this);
        return this
    }
    
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    
    passengers() {
      return this.trips().map(trip => {
        return trip.passenger();
      });
    }
}

let passengerId=0
class Passenger{
   constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        // insert in the user to the store
        store.passengers.push(this);
        return this
    }
    
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }
}

let tripId=0
class Trip{
   constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId=driver.id
        this.passengerId=passenger.id
        // insert in the user to the store
        store.trips.push(this);
        return this
        
    }
    
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
    
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
}








