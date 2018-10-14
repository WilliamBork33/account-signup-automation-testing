
//TO DO: ACTIVATE THE REST OF THE FILTER SETTINGS


import carsPage from '../page_objects/cars.page';
import landingPage from '../page_objects/landing.page';

module.exports =  function() {

  //this.After({tags: ['@login']}, function () {

    this.Given(/^a client is on the cars page$/, function () {
        // Sets URL to Cars Search
        carsPage.carsURL();
      });


    this.When(/^the desired filters are applied$/, function () {

        // Search Location Steps
        carsPage.locationBox.click()
        carsPage.pickUpLocation.setValue('Nile Egypt');
        carsPage.locationConfirm();
        //carsPage.locationBox2.click()
        //carsPage.dropOffLocation.setValue('alexandria');
    
        // Search Calendar Steps
        carsPage.departCalendar.click();
        carsPage.departDate.click()

        // Search Time Steps
        carsPage.departTimeBox.click()

        // Start Search Steps
        carsPage.searchBtn.click()

        // Filter Steps
        carsPage.starGrade.click()
        //carsPage.priceRange.click()
        //carsPage.carType.click()
        //carsPage.airportPickup.click()
        //carsPage.filterBtn.click()

        // DEVELOPMENT TESTING AREAA
        carsPage.a();
        //carsPage.departTimeBox.setValue('09:00')
        //carsPage.tabBar.click()
        //carsPage.tabBar.setValue()
        //carsPage.tabBar2.click()
        //carsPage.pickUpLocation.setValue('cairo');
      });


    this.Then(/^the desired cars are displayed$/, function () {
        // Checks if Cars Are in Stock and Are Available
        carsPage.isExisting();
      });

      //});
}
