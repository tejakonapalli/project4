/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"project4sacrd2/project4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});