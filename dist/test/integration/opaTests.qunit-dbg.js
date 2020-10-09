/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/bizim/depotransfer/ZMM007_DEPO_TRANSFER/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});