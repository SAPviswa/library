// const { log } = require("console");

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.User", {
            onInit: function () { 

            },
            onClearFilterPress: function () {
                const oView = this.getView(),
                    iIDFilter = oView.byId("idIDFilterValue"),
                    iTitleFilter = oView.byId("idTitleFilterValue"),
                    sStockFilterLabel = oView.byId("idStockFilterValue"),
                    sGenreFilterLabel = oView.byId("idGenreFilterValue"),
                    oTable = oView.byId("idEmployeeTable");

                iIDFilter.setValue("");
                iTitleFilter.setValue("");
                sStockFilterLabel.setValue("");
                sGenreFilterLabel.setValue("");

                oTable.getBinding("items").filter([]);
            },
        });
    }
);
