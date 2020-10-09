sap.ui.define(["sap/ui/test/opaQunit","sap/ui/Device","./pages/Worklist","./pages/Browser","./pages/Object","./pages/App"],function(e,o){"use strict";var a=o.browser.msie||o.browser.edge?1500:1e3;QUnit.module("Navigation");e("Should see the objects list",function(e,o,a){e.iStartMyFLPApp({intent:"DepolarArasiTransfer-display"});a.onTheWorklistPage.iShouldSeeTheTable()});e("Should react on hash change",function(e,o,a){o.onTheWorklistPage.iRememberTheItemAtPosition(2);o.onTheBrowser.iChangeTheHashToTheRememberedItem();a.onTheObjectPage.iShouldSeeTheRememberedObject().and.theViewIsNotBusyAnymore()});e("Should go back to the TablePage",function(e,o,a){o.onTheBrowser.iPressOnTheBackwardsButton();a.onTheWorklistPage.iShouldSeeTheTable()});e("Object Page shows the correct object Details",function(e,o,a){o.onTheWorklistPage.iRememberTheItemAtPosition(1).and.iPressATableItemAtPosition(1);a.onTheObjectPage.iShouldSeeTheRememberedObject()});e("Should be on the table page again when browser back is pressed",function(e,o,a){o.onTheBrowser.iPressOnTheBackwardsButton();a.onTheWorklistPage.iShouldSeeTheTable()});e("Should be on the object page again when browser forwards is pressed",function(e,o,a){o.onTheBrowser.iPressOnTheForwardsButton();a.onTheObjectPage.iShouldSeeTheRememberedObject();a.iLeaveMyFLPApp()});e("Start the App and simulate metadata error: MessageBox should be shown",function(e,o,s){e.iStartMyFLPApp({intent:"DepolarArasiTransfer-display",delay:a,metadataError:true});s.onTheAppPage.iShouldSeeTheMessageBox();o.onTheAppPage.iCloseTheMessageBox();s.iLeaveMyFLPApp()});e("Start the App and simulate bad request error: MessageBox should be shown",function(e,o,s){e.iStartMyFLPApp({intent:"DepolarArasiTransfer-display",delay:a,errorType:"serverError"});s.onTheAppPage.iShouldSeeTheMessageBox();o.onTheAppPage.iCloseTheMessageBox();s.iLeaveMyFLPApp()})});