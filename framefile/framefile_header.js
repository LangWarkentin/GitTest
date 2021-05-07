let framefile_header = function () {

    //Links
    let inc_angular_Logo = element(by.xpath('//div[@class="grid-fluid"]//a[.="Code of Conduct"]'));
    let inc_features = element(by.xpath('//span[.="Features"]'));
    let inc_docs = element(by.xpath('//span[.="Docs"]'));
    let inc_resources = element(by.xpath('//span[.="Resources"]'));


    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    this.clickGo = function () {
        inc_angular_Logo.click();
    };

    this.get = function (url) {
        browser.get(url);
    };
    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function (firstNo) {
        secondNumber_input.sendKeys(firstNo);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new framefile_header();