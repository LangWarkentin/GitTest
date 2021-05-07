let framefile_header = require('C:/Users/chris/Desktop/Lernen/Angular/framefile/framefile_header');



describe('Prüfung Links des Headers', function () {

    it('Docs anklickbare und Weiterleitung', function () {
        //Gewünschte URL Geöfnet und der Browser ist auf maximaler größe
        var url = 'https://angular.io/';
        var EC = protractor.ExpectedConditions;
        var btn_docs = element(by.xpath('//span[.="Docs"]'));
        var isClickable = EC.elementToBeClickable(btn_docs);

        browser.get(url);
        console.log("01--Die Url wurde erfolgreich übergeben");
        browser.driver.manage().window().maximize();
        console.log("02--Browserfenster wurde maximiert");
        browser.sleep(2000);

        // Prüfung des Headerinhalts(docs)

        browser.wait(isClickable, 5000);
        console.log("03--Docs ist anklicktbar");
        //
        btn_docs.getText().then(function (text) {
            var btn_txt_docs = element(by.xpath('//span[.="Docs"]')).getText(text);
            console.log("05--der Headerbereich von Docs lautet: " + btn_txt_docs);
        }),
            //console.log(btn_docs.getText());
            expect(btn_docs.getText()).toEqual("DOCS")
        btn_docs.click();
        console.log("06--Docs wurde angeklickt");

        browser.wait(isClickable, 5000);
        console.log("07--Docs ist wieder anklicktbar");

        console.log("08--Testfall erfolgreich durchgeführt");

    });


});