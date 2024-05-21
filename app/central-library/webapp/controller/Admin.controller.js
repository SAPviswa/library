// const { log } = require("console");

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.Admin", {
            onInit: function () { 

            },
            onPress: function () {
                // Get the router instance
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
                // Navigate to the login route
                oRouter.navTo("RouteEntrance");
              }
        });
    }
);
