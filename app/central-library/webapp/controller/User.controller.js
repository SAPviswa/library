// // const { log } = require("console");

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/Filter",
//     "sap/ui/model/FilterOperator",
//     "sap/m/Token",
//     "sap/ui/model/json/JSONModel",
//     "sap/m/MessageBox",
//     'sap/m/MessageToast',
//     "sap/ui/core/Fragment"
    
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller, Filter, FilterOperator, MessageToast) {
//         "use strict";

//         return Controller.extend("com.app.centrallibrary.controller.User", {
//             onInit: function () {
//                var oFragmentController = new FragmentController(this);
// 	var oFragment = sap.ui.xmlfragment("com.app.centrallibrary.fragments.SearchBook", oFragmentController);
// 	this.getView().byId("myContainer").addContent(oFragment);
// 	console.log(oFragmentController);
//             },

//             onClearFilterPress: function () {
//                 // Clear the values of input fields
//                 this.byId("idISBNFilterValue").setValue("");
//                 this.byId("idTitleFilterValue").setValue("");
//                 this.byId("idAuthorFilterValue").setValue("");
//                 this.byId("idQuantityFilterValue").setValue("");
//                 this.byId("idGenreFilterValue").setValue("");

//                 // Refresh the table data by clearing filters
//                 const oTable = this.byId("idBooksTable");
//                 oTable.getBinding("items").filter([]);
//             },


//             onGoPress: function () {
//                 const oView = this.getView(),
//                     sISBNFilterValue = oView.byId("idISBNFilterValue").getValue(),
//                     sTitleFilterValue = oView.byId("idTitleFilterValue").getValue(),
//                     sAuthorFilterValue = oView.byId("idAuthorFilterValue").getValue(),
//                     sQuantityFilterValue = oView.byId("idQuantityFilterValue").getValue(),
//                     sGenreFilterValue = oView.byId("idGenreFilterValue").getValue(),
//                     oTable = oView.byId("idBooksTable"),
//                     aFilters = [];
    
//                 if (sISBNFilterValue) {
//                     aFilters.push(new Filter("ISBN", FilterOperator.Contains, sISBNFilterValue));
//                 }
//                 if (sTitleFilterValue) {
//                     aFilters.push(new Filter("title", FilterOperator.Contains, sTitleFilterValue));
//                 }
//                 if (sAuthorFilterValue) {
//                     aFilters.push(new Filter("author", FilterOperator.Contains, sAuthorFilterValue));
//                 }
//                 if (sQuantityFilterValue) {
//                     aFilters.push(new Filter("Quantity", FilterOperator.EQ, sQuantityFilterValue));
//                 }
//                 if (sGenreFilterValue) {
//                     aFilters.push(new Filter("genre", FilterOperator.Contains, sGenreFilterValue));
//                 }
    
//                 // Apply the filters to the binding of the items aggregation of the table
//                 oTable.getBinding("items").filter(aFilters);

//             },
//             onPress: function () {
//                 // Get the router instance
//                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
//                 // Navigate to the login route
//                 oRouter.navTo("RouteEntrance");
//               },
              
//         });

//     }
// );



// const { log } = require("console");

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/Token",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, MessageToast) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.User", {
            onInit: function () {
               
            },

            onClearFilterPress: function () {
                // Clear the values of input fields
                this.byId("idISBNFilterValue").setValue("");
                this.byId("idTitleFilterValue").setValue("");
                this.byId("idAuthorFilterValue").setValue("");
                this.byId("idQuantityFilterValue").setValue("");
                this.byId("idGenreFilterValue").setValue("");

                // Refresh the table data by clearing filters
                const oTable = this.byId("idBooksTable");
                oTable.getBinding("items").filter([]);
            },


            onGoPress: function () {
                const oView = this.getView(),
                    sISBNFilterValue = oView.byId("idISBNFilterValue").getValue(),
                    sTitleFilterValue = oView.byId("idTitleFilterValue").getValue(),
                    sAuthorFilterValue = oView.byId("idAuthorFilterValue").getValue(),
                    sQuantityFilterValue = oView.byId("idQuantityFilterValue").getValue(),
                    sGenreFilterValue = oView.byId("idGenreFilterValue").getValue(),
                    oTable = oView.byId("idBooksTable"),
                    aFilters = [];
    
                if (sISBNFilterValue) {
                    aFilters.push(new Filter("ISBN", FilterOperator.Contains, sISBNFilterValue));
                }
                if (sTitleFilterValue) {
                    aFilters.push(new Filter("title", FilterOperator.Contains, sTitleFilterValue));
                }
                if (sAuthorFilterValue) {
                    aFilters.push(new Filter("author", FilterOperator.Contains, sAuthorFilterValue));
                }
                if (sQuantityFilterValue) {
                    aFilters.push(new Filter("Quantity", FilterOperator.EQ, sQuantityFilterValue));
                }
                if (sGenreFilterValue) {
                    aFilters.push(new Filter("genre", FilterOperator.Contains, sGenreFilterValue));
                }
    
                // Apply the filters to the binding of the items aggregation of the table
                oTable.getBinding("items").filter(aFilters);

            },
            onPress: function () {
                // Get the router instance
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                // Navigate to the login route
                oRouter.navTo("RouteEntrance");
              },
            
              onSearch: function (oEvent) {
                var sQuery = oEvent.getParameter("query");
                var aFilters = [];
    
                if (sQuery) {
                    // Construct filters for title, author, and genre
                    var oTitleFilter = new Filter("title", FilterOperator.Contains, sQuery);
                    var oAuthorFilter = new Filter("author", FilterOperator.Contains, sQuery);
                    var oGenreFilter = new Filter("genre", FilterOperator.Contains, sQuery);
    
                    // Combine filters with OR logic
                    aFilters.push(new Filter({
                        filters: [oTitleFilter, oAuthorFilter, oGenreFilter],
                        and: false
                    }));
                }
    
                // Apply filters to the binding of the items aggregation of the table
                var oTable = this.getView().byId("idBooksTable");
                oTable.getBinding("items").filter(aFilters);
            },
            
            
           
        });

    }
);