import { Page } from './page';

class CarsPage extends Page {
    
    // Get Search Location Elements
    get locationBox()       { return browser.element('#s2id_carlocations > a'); }
    get pickUpLocation ()   { return browser.element('#select2-drop > div > input'); }
    get locationBox2()      { return browser.element('#s2id_carlocations > a'); }
    get dropOffLocation ()  { return browser.element('#select2-drop > div > input'); }

    // Get Search Calendar Elements
    get departCalendar ()   { return browser.element('#departcar'); }
    get departDate ()       { return browser.element('body > div:nth-child(13) > div.datepicker-days > table > tbody > tr:nth-child(3) > td:nth-child(2)'); }

    // Get Search Time Elements
    get departTimeBox ()    { return browser.element('#body-section > div.search_head > div > form > div:nth-child(4) > div > select'); }
    get departTime ()       { return browser.element('#body-section > div.search_head > div > form > div:nth-child(4) > div > select'); }

    // Get Search Button Elements
    get searchBtn ()        { return browser.element('#body-section > div.search_head > div > form > div.bgfade.col-md-2.form-group.go-right.col-xs-12.search-button > button'); }

    
    ////////////////////////////////////////////////////////////////////////////////
    //                                    //                                      //
    ////////////////////////////////////////////////////////////////////////////////


    // Get Filter Star Elements
    get starGrade ()        { return browser.element('#collapse1 > div.hpadding20 > div > div:nth-child(1) > div'); }

    // Get Filter Price Range Elements
    //get priceRange ()     { return browser.element('#collapse2 > div > div > div.tooltip.top > div.tooltip-inner'); }

    // Get Filter Car Type Elements
    get carType()           { return browser.element(''); }

    // Get Filter Airport Pickup Elements
    get airportPickup()     { return browser.element(''); }

    // Get Filter Search Button Elements
    get filterBtn()     { return browser.element('#searchform'); }


    ////////////////////////////////////////////////////////////////////////////////
    //                                    //                                      //
    ////////////////////////////////////////////////////////////////////////////////


    // Method to Set URL to Cars Search Page
    carsURL() {
        browser.url('http://www.phptravels.net/cars');
    }

    // Method to Click & Confirm Location Selection
    locationConfirm() {
        browser.click('#select2-drop > ul > li > div');
    }

    // Method to Slide Price Range Slider
    slidePrice(){
        //#collapse2 > div > div > div.tooltip.top > div.tooltip-inner
        console.log("slidePrice")
    }

    // Method to Check if Available Cars Element Exists
    isExisting() {
        let isExisting;
        isExisting = browser.isExisting('#body-section > div.listingbg > div > div.col-md-9.col-xs-12 > div > table > tbody > tr > td');
        console.log("Cars in stock and available: " + isExisting);
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                                    //                                      //
    ////////////////////////////////////////////////////////////////////////////////


    // DEVELOPMENT TESTING AREA
    a() { 
        var selectBox = this.departTimeBox
        console.log(selectBox.getValue()); // returns "someValue0"
        //selectBox.setValue('06:00') ////  HERE TO CONTINUE TRYING TO FIND OUT ABOUT Error: An element command could not be completed because the element is in an invalid state (e.g. attempting to click a disabled element).at elementIdValue

        //selectBox.selectByValue('someValue3');
        // console.log(selectBox.getValue()); // returns "someValue3"
    
        //var selectBox = this.departTimeBox
        //console.log(selectBox.getText('option:checked')); // returns "uno"
    
        //selectBox.selectByVisibleText('cuatro');
        //console.log(selectBox.getText('option:checked')); // returns "cuatro"
    }

}
 
export default new CarsPage();
