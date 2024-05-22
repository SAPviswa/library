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
                this.oDialogAdd ??= await this.loadFragment({
                    name: "com.app.centrallibrary.fragments.Add"
                });

                this.oDialogAdd.open();
            },
            onCancel: function () {
                if (this.oDialogAdd.isOpen()) {
                    this.oDialogAdd.close()
                }
            },
            async onPressUpdate() { 
                debugger
                // create dialog lazily
                this.oDialogupdate ??= await this.loadFragment({
                    name: "com.app.centrallibrary.fragments.Update"
                });

                this.oDialogupdate.open();
            },
            onCancelUpdate: function () {
                if (this.oDialogupdate.isOpen()) {
                    this.oDialogupdate.close()
                }
            }
        });
    }
);

