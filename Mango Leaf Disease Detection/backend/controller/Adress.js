class Address {
    constructor(city, state, country, pincode, phoneNumber) {
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.phoneNumber = phoneNumber;
    }
}

// Usage example:
const address = new Address("New York", "NY", "USA", 10001, "123-456-7890");

console.log("City:", address.city); 
console.log("State:", address.state); 
console.log("Country:", address.country); 
console.log("Pincode:", address.pincode); 
console.log("Phone Number:", address.phoneNumber); 
