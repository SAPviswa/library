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
              },
              
              async onPressAdd() {
                // create dialog lazily
                debugger
                this.oDialog ??= await this.loadFragment({
                    name: "com.app.centrallibrary.fragments.Add"
                });

                this.oDialog.open();
            },
            onCancel: function () {
                if (this.oDialog.isOpen()) {
                    this.oDialog.close()
                }
            }
        });
    }
);
