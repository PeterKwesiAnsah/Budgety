
    //UI Controller Module Code
    //gets inputs from elements
    //functions that updates UI
    ////////////function to gets user input
    ////////////Another function based on the first one to set expense or income objects
    ////////////function to clear user input
    export  var DOMstrings={
        select:".add__type",
        inputValue:".add__value",
        inputDesc:".add__description",
        budgetView:".budget__value",
        percentage:".budget__expenses--percentage",
        addBtn:".add__btn",
        incomelist:".income__list",
        expenselist:".expenses__list",
        totalincView:".budget__income--value",
        totalexpView:".budget__expenses--value",
        bottomEls:".container clearfix",
        dateLabel:'.budget__title--month'
    }
    var select=document.querySelector(DOMstrings.select)
    //Gets the input values of the input fields and returns a an array
   export var getInput=function(){
        return {
        type:select.value,
        value:Number(document.querySelector(DOMstrings.inputValue).value),
        desc:document.querySelector(DOMstrings.inputDesc).value
      
        }
    
    }
    ///Used to clear the user fields and put the focus back to the user
  export  var clearfields= function(){
        document.querySelector(DOMstrings.inputValue).value=""
        document.querySelector(DOMstrings.inputDesc).value=""
        document.querySelector(DOMstrings.inputDesc).focus()
    }
    //Formating number
   export var format=function(value){
        value=Math.abs(value)
        value=value.toFixed(2)
    
        var int=value.split(".")[0]
        var dec=value.split(".")[1]
        if(int.length>3){
            int=int.substr(0,int.length-3)+","+int.substr(int.length-3,3)
        }
        return value=int+"."+dec
    
    }
    //UI template for new items added
  export var displayltem=function(id){
        var income=` <div class="item clearfix" id=${"inc-"+id}>
    <div class="item__description">${this.desc}</div>
    <div class="right clearfix">
        <div class="item__value">+ ${format(this.value)}</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
    </div>`
    var expense=`<div class="item clearfix" id=${"exp-"+id}>
    <div class="item__description">${this.desc}</div>
    <div class="right clearfix">
        <div class="item__value">- ${format(this.value)}</div>
        <div class="item__percentage">--</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
    </div>`
        var type=this.type
        var inner=document.querySelector("."+type+"__list").innerHTML
        if(type==="exp")
            document.querySelector("."+type+"__list").innerHTML=inner+expense
        else if(type==="inc")
        document.querySelector("."+type+"__list").innerHTML=inner+income
    }
    //Display the budget and it totals
    export var updatebudget=function(budget,totalinc,totalexp){
            var sign=budget >= 0 ? "+ " : "- "
        document.querySelector(DOMstrings.budgetView).textContent=sign+format(budget)
        document.querySelector(DOMstrings.totalincView).textContent="+ "+format(totalinc)
        document.querySelector(DOMstrings.totalexpView).textContent="- "+format(totalexp)
      
        }
   export var del_Item=function(id){
        document.getElementById(id).remove()
    
    }
    //Display Percentage
   export var updatePercTotal=function(number){
        var percTotal=document.querySelector(DOMstrings.percentage)
        if(number>0){
            percTotal.textContent=number+"%"
        }
        else
        percTotal.textContent="---"
    }
    //Display the percentages for elements
  export  var updatePercEl=function(percArray){
        var expList=document.querySelectorAll(".item__percentage")
        if(percArray.length){
            percArray.forEach(function(element,index){
                if(element>0){
                    expList[index].textContent=element+"%"
                }
                else if(element < 0){
                    expList[index].textContent="---"
                }
    
            })
        }
    
    }
    //Change Color of inputs
  export  var changeColor=function(){
        document.querySelector(DOMstrings.inputValue).classList.toggle("red-focus")
        document.querySelector(DOMstrings.inputDesc).classList.toggle("red-focus")
        document.querySelector(DOMstrings.select).classList.toggle("red-focus")
        document.querySelector(DOMstrings.addBtn).classList.toggle("red")
        console.log('fuvk me')
    }
    
    
    
    
    
  