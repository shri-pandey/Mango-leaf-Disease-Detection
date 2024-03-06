class User {
    constructor(userID, selectedLocation) {
        this.userID = userID;
        this.selectedLocation = selectedLocation;
    }

    selectLocation(location) {
        this.selectedLocation = location;
        console.log(`Location selected: Latitude ${location.latitude}, Longitude ${location.longitude}`);
    }

    leafDetection() {
        // Method implementation for leaf detection
        console.log("Leaf detection method called.");
    }

    languageTranslator() {
        // Method implementation for language translation
        console.log("Language translator method called.");
    }

    userGuide() {
        // Method implementation for user guide
        console.log("User guide method called.");
    }

    checkCamera() {
        // Method implementation for checking camera
        console.log("Camera check method called.");
    }

    diseasePrevention() {
        // Method implementation for disease prevention
        console.log("Disease prevention method called.");
    }
}




// const user = new User(1, new Location(40.7128, -74.0060));
// user.selectLocation(new Location(34.0522, -118.2437)); 
// user.leafDetection(); 
// user.languageTranslator(); 
// user.userGuide();
// user.checkCamera(); 
// user.diseasePrevention(); 