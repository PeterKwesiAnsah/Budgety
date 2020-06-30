/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_models_budget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/models/budget */ \"./src/js/models/budget.js\");\n/* harmony import */ var _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/view/budgetView */ \"./src/js/view/budgetView.js\");\n\r\n\r\n\r\nvar addItem=function(){\r\n        ///1.Get the new item from the UI\r\n        var newItem=_js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"getInput\"]()\r\n        //2.Add the item to the data structure\r\n            //2.1 Checking to see that we don't add Empty fields\r\n        if(!isNaN(newItem.value) && newItem.desc!==\"\" && newItem.value>0){\r\n        var id=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"add_data\"](newItem)\r\n        //3.Display the Item\r\n        _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"displayltem\"].call(newItem,id)\r\n        }\r\n}\r\n\r\nvar add_budget=function(){\r\n        //1.Calculate the budget\r\n        _js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"budget_cal\"]()\r\n        //2.Get the Budget\r\n        var bud=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"get_budget\"]()\r\n        //3.Get the Totals\r\n        var Totalexp=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"get_Totals\"]().exp\r\n        var Totalinc=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"get_Totals\"]().inc\r\n        //4.Display the budget and Totals\r\n        _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"updatebudget\"](bud,Totalinc,Totalexp)\r\n    \r\n    \r\n}\r\n    \r\nvar updatePercTotal=function(){\r\n        //1.Calculate Total Percentage\r\n        _js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"cal_perc\"]()\r\n        //2.Get Percentage\r\n        var perc=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"get_perc\"]()\r\n        //3.Update UI\r\n        _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"updatePercTotal\"](perc)\r\n    \r\n    }\r\n    \r\nvar PercEl=function(){\r\n        //1.Get the percentages of the expense objects\r\n        var percArray=_js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"cal_percEl\"]()\r\n       //2.Update the percentages of the elements\r\n        _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"updatePercEl\"](percArray)\r\n        \r\n    }\r\n    \r\nvar ctrladditem=function(){\r\n        //1.Add the user input to the appropiate data structure and to the UI\r\n        addItem()\r\n        //2.Clear the user fields\r\n        _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"clearfields\"]()\r\n        //3.Calculate and update the Budget UI \r\n        add_budget()\r\n        //4.Calculate and update the Total expense Percentage UI\r\n        updatePercTotal()\r\n        //5.Calculate and update the percentages of the elements in the UI\r\n        PercEl()\r\n    \r\n    \r\n    }\r\n\r\nvar delelement=function(e){\r\n        var id=e.target.parentNode.parentNode.parentNode.parentNode.id\r\n        if(id){\r\n            var type=id.split(\"-\")[0]\r\n            var idEl=Number(id.split(\"-\")[1])\r\n    \r\n            //1.Remove item from the UI\r\n            _js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"del_Item\"](id)\r\n            //2.Remove item from data structure\r\n            _js_models_budget__WEBPACK_IMPORTED_MODULE_0__[\"removeItem\"](type,idEl)\r\n    \r\n            //3.Update the budget and the totals\r\n            add_budget()\r\n            \r\n            \r\n        }\r\n        //4.Update the Percentage Total\r\n        updatePercTotal()\r\n        //5.Getting and updating the percentages of individual expense objects\r\n        PercEl()\r\n    \r\n}\r\n    document.querySelector(_js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"DOMstrings\"].addBtn).addEventListener(\"click\",ctrladditem)\r\n    document.addEventListener(\"keypress\",function(e){\r\n        if(e.keyCode===13)\r\n            ctrladditem()\r\n    })\r\n    \r\n    document.querySelector(\".container\").addEventListener(\"click\",delelement)\r\n    document.querySelector(_js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"DOMstrings\"].select).addEventListener(\"change\",_js_view_budgetView__WEBPACK_IMPORTED_MODULE_1__[\"changeColor\"])\r\n    \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/models/budget.js":
/*!*********************************!*\
  !*** ./src/js/models/budget.js ***!
  \*********************************/
/*! exports provided: cal_percEl, cal_perc, get_perc, budget_cal, get_budget, get_Totals, add_data, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cal_percEl\", function() { return cal_percEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cal_perc\", function() { return cal_perc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_perc\", function() { return get_perc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"budget_cal\", function() { return budget_cal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_budget\", function() { return get_budget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_Totals\", function() { return get_Totals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_data\", function() { return add_data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeItem\", function() { return removeItem; });\n\r\n    ///An Income function constructor for creating income objects\r\n    var Income=function(id,value,desc){\r\n        this.id=id,\r\n        this.value=value,\r\n        this.desc=desc\r\n    }\r\n    //An EXpense function constructor for creating expense objects\r\n    var Expense=function(id,value,desc){\r\n        this.id=id,\r\n        this.value=value,\r\n        this.desc=desc\r\n        this.perc=-1\r\n        \r\n    }\r\n    Expense.prototype.perEl=function(){\r\n        if(data.totals.inc)\r\n            this.perc=Math.floor((this.value/data.totals.inc)*100)\r\n        else\r\n        this.perc=-1\r\n    }\r\n   var cal_percEl=function(){\r\n        var percElArray=[]\r\n        if(data.allitems.exp.length>0){\r\n               percElArray=data.allitems.exp.map(function(element){\r\n                  element.perEl() \r\n                  return element.perc\r\n            })\r\n          \r\n        }\r\n        return percElArray\r\n        \r\n    }\r\n    ///Data Containing all the important values we need\r\n    var data={\r\n        allitems:{\r\n            exp:[],\r\n            inc:[]\r\n        },\r\n        totals:{\r\n            exp:0,\r\n            inc:0\r\n        },\r\n        budget:0,\r\n        percentage:-1\r\n    }\r\n    \r\n    var cal_perc=function(){\r\n        \r\n        if(data.totals.exp && data.totals.inc){\r\n            data.percentage=Math.floor((data.totals.exp/data.totals.inc)*100)\r\n        }\r\n        else \r\n        data.percentage=-1\r\n    }\r\n   var get_perc=function(){\r\n        return data.percentage\r\n    }\r\n    \r\n   var budget_cal=function(){\r\n        //Calculate and set the  income totals\r\n        cal_totals(\"inc\")\r\n        //Calculate and set the expense totals\r\n        cal_totals(\"exp\")\r\n        //Calculate the budget\r\n        data.budget=data.totals.inc-data.totals.exp\r\n    }\r\n    var get_budget=function(){\r\n        return data.budget\r\n    }\r\n    var get_Totals=function(){\r\n        return data.totals\r\n    }\r\n    /////Used to calculate Totals\r\n    var cal_totals=function(type){\r\n        var sum=0\r\n        if(data.allitems[type].length>0){\r\n            data.allitems[type].forEach(function(element){\r\n                sum=element.value+sum\r\n            })\r\n        \r\n        }\r\n    //setting the totals\r\n    data.totals[type]=sum\r\n       \r\n    }\r\n    //Used to add a new item to our data structure\r\n    var add_data=function(newItem){\r\n    var type=newItem.type\r\n    var value=newItem.value\r\n    var desc=newItem.desc\r\n    var ID\r\n    if(data.allitems[type].length>0){\r\n        ID=data.allitems[type][data.allitems[type].length-1].id+1\r\n    }\r\n    else ID=0\r\n    \r\n    if(type===\"inc\"){\r\n     var inc=new Income(ID,value,desc)\r\n     data.allitems[type].push(inc)\r\n    }\r\n    else if(type==\"exp\"){\r\n        var exp=new Expense(ID,value,desc)\r\n        data.allitems[type].push(exp)\r\n     }\r\n    return ID//return the id of the added element\r\n     }\r\n     //Removes an item from an array based on the type and id\r\n    var removeItem=function(type,idEl){\r\n    \r\n        var itemIDs= data.allitems[type].map(function(element){\r\n             return element.id\r\n             })\r\n        \r\n    var del_index=itemIDs.indexOf(idEl)//Finding the index of the id we want to delete in the array\r\n    \r\n    if(del_index > -1){\r\n        data.allitems[type].splice(del_index,1)//deleting the item\r\n    }\r\n    \r\n     }\r\n    \r\n    \r\n     \r\n     \r\n\r\n    \r\n    \r\n\r\n    \n\n//# sourceURL=webpack:///./src/js/models/budget.js?");

/***/ }),

/***/ "./src/js/view/budgetView.js":
/*!***********************************!*\
  !*** ./src/js/view/budgetView.js ***!
  \***********************************/
/*! exports provided: DOMstrings, getInput, clearfields, displayltem, updatebudget, del_Item, updatePercTotal, updatePercEl, changeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMstrings\", function() { return DOMstrings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearfields\", function() { return clearfields; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayltem\", function() { return displayltem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatebudget\", function() { return updatebudget; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del_Item\", function() { return del_Item; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePercTotal\", function() { return updatePercTotal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePercEl\", function() { return updatePercEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeColor\", function() { return changeColor; });\n\r\n    //UI Controller Module Code\r\n    //gets inputs from elements\r\n    //functions that updates UI\r\n    ////////////function to gets user input\r\n    ////////////Another function based on the first one to set expense or income objects\r\n    ////////////function to clear user input\r\n    var DOMstrings={\r\n        select:\".add__type\",\r\n        inputValue:\".add__value\",\r\n        inputDesc:\".add__description\",\r\n        budgetView:\".budget__value\",\r\n        percentage:\".budget__expenses--percentage\",\r\n        addBtn:\".add__btn\",\r\n        incomelist:\".income__list\",\r\n        expenselist:\".expenses__list\",\r\n        totalincView:\".budget__income--value\",\r\n        totalexpView:\".budget__expenses--value\",\r\n        bottomEls:\".container clearfix\"\r\n    }\r\n    var select=document.querySelector(DOMstrings.select)\r\n    //Gets the input values of the input fields and returns a an array\r\n   var getInput=function(){\r\n        return {\r\n        type:select.value,\r\n        value:Number(document.querySelector(DOMstrings.inputValue).value),\r\n        desc:document.querySelector(DOMstrings.inputDesc).value\r\n      \r\n        }\r\n    \r\n    }\r\n    ///Used to clear the user fields and put the focus back to the user\r\n  var clearfields= function(){\r\n        document.querySelector(DOMstrings.inputValue).value=\"\"\r\n        document.querySelector(DOMstrings.inputDesc).value=\"\"\r\n        document.querySelector(DOMstrings.inputDesc).focus()\r\n    }\r\n    //Formating number\r\n    var format=function(value){\r\n        value=Math.abs(value)\r\n        value=value.toFixed(2)\r\n    \r\n        var int=value.split(\".\")[0]\r\n        var dec=value.split(\".\")[1]\r\n        if(int.length>3){\r\n            int=int.substr(0,int.length-3)+\",\"+int.substr(int.length-3,3)\r\n        }\r\n        return value=int+\".\"+dec\r\n    \r\n    }\r\n    //UI template for new items added\r\n  var displayltem=function(id){\r\n        var income=` <div class=\"item clearfix\" id=${\"inc-\"+id}>\r\n    <div class=\"item__description\">${this.desc}</div>\r\n    <div class=\"right clearfix\">\r\n        <div class=\"item__value\">+ ${format(this.value)}</div>\r\n        <div class=\"item__delete\">\r\n            <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\r\n        </div>\r\n    </div>\r\n    </div>`\r\n    var expense=`<div class=\"item clearfix\" id=${\"exp-\"+id}>\r\n    <div class=\"item__description\">${this.desc}</div>\r\n    <div class=\"right clearfix\">\r\n        <div class=\"item__value\">- ${format(this.value)}</div>\r\n        <div class=\"item__percentage\">--</div>\r\n        <div class=\"item__delete\">\r\n            <button class=\"item__delete--btn\"><i class=\"ion-ios-close-outline\"></i></button>\r\n        </div>\r\n    </div>\r\n    </div>`\r\n        var type=this.type\r\n        var inner=document.querySelector(\".\"+type+\"__list\").innerHTML\r\n        if(type===\"exp\")\r\n            document.querySelector(\".\"+type+\"__list\").innerHTML=inner+expense\r\n        else if(type===\"inc\")\r\n        document.querySelector(\".\"+type+\"__list\").innerHTML=inner+income\r\n    }\r\n    //Display the budget and it totals\r\n    var updatebudget=function(budget,totalinc,totalexp){\r\n            var sign=budget > 0 ? \"+ \" : \"- \"\r\n        document.querySelector(DOMstrings.budgetView).textContent=sign+format(budget)\r\n        document.querySelector(DOMstrings.totalincView).textContent=\"+ \"+format(totalinc)\r\n        document.querySelector(DOMstrings.totalexpView).textContent=\"- \"+format(totalexp)\r\n      \r\n        }\r\n   var del_Item=function(id){\r\n        document.getElementById(id).remove()\r\n    \r\n    }\r\n    //Display Percentage\r\n   var updatePercTotal=function(number){\r\n        var percTotal=document.querySelector(DOMstrings.percentage)\r\n        if(number>0){\r\n            percTotal.textContent=number+\"%\"\r\n        }\r\n        else\r\n        percTotal.textContent=\"---\"\r\n    }\r\n    //Display the percentages for elements\r\n  var updatePercEl=function(percArray){\r\n        var expList=document.querySelectorAll(\".item__percentage\")\r\n        if(percArray.length){\r\n            percArray.forEach(function(element,index){\r\n                if(element>0){\r\n                    expList[index].textContent=element+\"%\"\r\n                }\r\n                else if(element < 0){\r\n                    expList[index].textContent=\"---\"\r\n                }\r\n    \r\n            })\r\n        }\r\n    \r\n    }\r\n    //Change Color of inputs\r\n  var changeColor=function(){\r\n        document.querySelector(DOMstrings.inputValue).classList.toggle(\"red-focus\")\r\n        document.querySelector(DOMstrings.inputDesc).classList.toggle(\"red-focus\")\r\n        document.querySelector(DOMstrings.select).classList.toggle(\"red-focus\")\r\n        document.querySelector(DOMstrings.addBtn).classList.toggle(\"red\")\r\n    }\r\n    \r\n    \r\n    \r\n    \r\n    \r\n  \n\n//# sourceURL=webpack:///./src/js/view/budgetView.js?");

/***/ })

/******/ });