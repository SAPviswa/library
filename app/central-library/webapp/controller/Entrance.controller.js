sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.Entrance", {
            onInit: function () {

            },

            onBtnClick: function () {

                debugger
                var oUser = this.getView().byId("user").getValue();  //get input value data in oUser variable
                var oPwd = this.getView().byId("pwd").getValue();    //get input value data in oPwd variable

                if (oUser === "viswa" && oPwd === "viswam062") {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteAdmin")
                } 
                else if (oUser === "user" && oPwd === "user062") {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteUser")
            } 
                else if (oUser === "" && oPwd === "") {
                        alert("Enter the User name and Password")
                } 
                else {
                    alert("Invalid Credentials");
                }
            },
            // onClearFilterPress: function () {
            //     // Clear the input fields
            //     this.byId("user").setValue("");
            //     this.byId("pwd").setValue("");
            // }

        });
    });
