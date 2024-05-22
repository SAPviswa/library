sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.Entrance", {
            onInit: function () {

            },

            onBtnClick: function () {

                var oUser = this.getView().byId("user").getValue();  //get input value data in oUser variable
                var oPwd = this.getView().byId("pwd").getValue();    //get input value data in oPwd variable

                if (oUser === "viswa" && oPwd === "Password") {
                    const oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteAdmin")
                }
                else if (oUser === "Username" && oPwd === "Password") {
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
            onClearFilterPress: function () {
                // Clear the input fields
                this.byId("user").setValue("");
                this.byId("pwd").setValue("");
            },

            async onBtnSignup() {
                // create dialog lazily
                this.oDialog ??= await this.loadFragment({
                    name: "com.app.centrallibrary.fragments.SignUpDialog"
                });

                this.oDialog.open();
            },
            onCancelSignUp: function () {
                if (this.oDialog.isOpen()) {
                    this.oDialog.close()
                }
            },

        });
    });
