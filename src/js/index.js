import * as budget from './models/budget'
import * as budgetView from './view/budgetView'
import {DOMstrings} from './view/budgetView'


var displayMonth=function() {
    var now, months, month, year;
    
    now = new Date();
    //var christmas = new Date(2016, 11, 25);
    
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();
    
    year = now.getFullYear();
    document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
}
var addItem=function(){
        ///1.Get the new item from the UI
        var newItem=budgetView.getInput()
        //2.Add the item to the data structure
            //2.1 Checking to see that we don't add Empty fields
        if(!isNaN(newItem.value) && newItem.desc!=="" && newItem.value>0){
        var id=budget.add_data(newItem)
        //3.Display the Item
        budgetView.displayltem.call(newItem,id)
        }
}

var add_budget=function(){
        //1.Calculate the budget
        budget.budget_cal()
        //2.Get the Budget
        var bud=budget.get_budget()
        //3.Get the Totals
        var Totalexp=budget.get_Totals().exp
        var Totalinc=budget.get_Totals().inc
        //4.Display the budget and Totals
        budgetView.updatebudget(bud,Totalinc,Totalexp)
    
    
}
    
var updatePercTotal=function(){
        //1.Calculate Total Percentage
        budget.cal_perc()
        //2.Get Percentage
        var perc=budget.get_perc()
        //3.Update UI
        budgetView.updatePercTotal(perc)
    
    }
    
var PercEl=function(){
        //1.Get the percentages of the expense objects
        var percArray=budget.cal_percEl()
       //2.Update the percentages of the elements
        budgetView.updatePercEl(percArray)
        
    }
    
var ctrladditem=function(){
        //1.Add the user input to the appropiate data structure and to the UI
        addItem()
        //2.Clear the user fields
        budgetView.clearfields()
        //3.Calculate and update the Budget UI 
        add_budget()
        //4.Calculate and update the Total expense Percentage UI
        updatePercTotal()
        //5.Calculate and update the percentages of the elements in the UI
        PercEl()
    
    
    }

var delelement=function(e){
        var id=e.target.parentNode.parentNode.parentNode.parentNode.id
        if(id){
            var type=id.split("-")[0]
            var idEl=Number(id.split("-")[1])
    
            //1.Remove item from the UI
            budgetView.del_Item(id)
            //2.Remove item from data structure
            budget.removeItem(type,idEl)
    
            //3.Update the budget and the totals
            add_budget()
            
            
        }
        //4.Update the Percentage Total
        updatePercTotal()
        //5.Getting and updating the percentages of individual expense objects
        PercEl()
    
}
var events=function(){
    document.querySelector(DOMstrings.addBtn).addEventListener("click",ctrladditem)
    document.addEventListener("keypress",function(e){
        if(e.keyCode===13)
            ctrladditem()
    })
    
    document.querySelector(".container").addEventListener("click",delelement)
    document.querySelector(DOMstrings.select).addEventListener("change",budgetView.changeColor)
}
  
    
var init=function(){
    events()
    displayMonth()
    budgetView.updatebudget(0,0,0)
    budgetView.updatePercTotal(0)
    console.log('Application has started')
}
init()

