// const { log } = require("console");

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
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
            onGoPress: function () {
                const oView = this.getView(),
                    iISBNFilter = oView.byId("idISBNFilterValue"),
                    iISBNFilterValue = iISBNFilter.getTokens(),
                    iTitleFilter = oView.byId("idTitleFilterValue"),
                    iTitleFilterValue = iTitleFilter.getValue(),
                    sAuthorFilterLabel = oView.byId("idAuthorFilterValue"),
                    sAuthorValue = sAuthorFilterLabel.getValue(),
                    sGenreFilterLabel = oView.byId("idGenreFilterValue"),
                    sGenreValue = sGenreFilterLabel.getValue(),
                    sQuantityFilterLabel = oView.byId("idQuantityFilterValue"),
                    sQuantityValue = sQuantityFilterLabel.getValue(),
                    oTable = oView.byId("idBooksTable"),
                    aFilters = [];
                iISBNFilterValue.filter((element) => {
                    element ? aFilters.push(new Filter("ISBN", FilterOperator.EQ, element.getKey())) : "";
                })
                sAuthorFilterLabel ? aFilters.push(new Filter("author", FilterOperator.EQ, sAuthorValue)) : "";
                // oTable.getBinding("items").filter(aFilters);

                iTitleFilterValue ? aFilters.push(new Filter("title", FilterOperator.EQ, iTitleFilterValue)) : "";
                // oTable.getBinding("items").filter(aFilters);

                sQuantityValue ? aFilters.push(new Filter("Quantity", FilterOperator.EQ, sQuantityValue)) : "";
                // oTable.getBinding("items").filter(aFilters);

                sGenreValue ? aFilters.push(new Filter("genre", FilterOperator.EQ, sGenreValue)) : "";


                oTable.getBinding("items").filter(aFilters);
            },
        });
    }
);
