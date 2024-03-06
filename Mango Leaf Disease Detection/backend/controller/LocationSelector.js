class LocationSelector {
    constructor() {
      this.selectedLocation = null;
    }
  
    selectLocation(location) {
      this.selectedLocation = location;
      console.log(`Location selected: ${this.selectedLocation}`);
    }
  
    getSelectedLocation() {
      return this.selectedLocation;
    }
  }
  
 
  const locationSelector = new LocationSelector();
  locationSelector.selectLocation("Pune");
  console.log(locationSelector.getSelectedLocation()); 
  