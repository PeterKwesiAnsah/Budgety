
    ///An Income function constructor for creating income objects
   export var data={
        allitems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage:-1
    }

   export var Income=function(id,value,desc){
        this.id=id,
        this.value=value,
        this.desc=desc
    }
    //An EXpense function constructor for creating expense objects
   export var Expense=function(id,value,desc){
        this.id=id,
        this.value=value,
        this.desc=desc
        this.perc=-1
        
    }
    Expense.prototype.perEl=function(){
        if(data.totals.inc)
            this.perc=Math.floor((this.value/data.totals.inc)*100)
        else
        this.perc=-1
    }
   export var cal_percEl=function(){
        var percElArray=[]
        if(data.allitems.exp.length>0){
               percElArray=data.allitems.exp.map(function(element){
                  element.perEl() 
                  return element.perc
            })
          
        }
      
        return percElArray
        
    }
    ///Data Containing all the important values we need
 
    export var cal_perc=function(){
        
        if(data.totals.exp && data.totals.inc){
            data.percentage=Math.floor((data.totals.exp/data.totals.inc)*100)
        }
        else 
        data.percentage=-1
    }
   export var get_perc=function(){
        return data.percentage
    }
    
   export var budget_cal=function(){
        //Calculate and set the  income totals
        cal_totals("inc")
        //Calculate and set the expense totals
        cal_totals("exp")
        //Calculate the budget
        data.budget=data.totals.inc-data.totals.exp
    }
    export var get_budget=function(){
        return data.budget
    }
    export var get_Totals=function(){
        return data.totals
    }
    /////Used to calculate Totals
    export var cal_totals=function(type){
        var sum=0
        if(data.allitems[type].length>0){
            data.allitems[type].forEach(function(element){
                sum=element.value+sum
            })
        
        }
    //setting the totals
    data.totals[type]=sum
       return sum
    }
    //Used to add a new item to our data structure
    export var add_data=function(newItem){
    var type=newItem.type
    var value=newItem.value
    var desc=newItem.desc
    var ID
    if(data.allitems[type].length>0){
        ID=data.allitems[type][data.allitems[type].length-1].id+1
    }
    else ID=0
    
    if(type==="inc"){
     var inc=new Income(ID,value,desc)
     data.allitems[type].push(inc)
    }
    else if(type=="exp"){
        var exp=new Expense(ID,value,desc)
        data.allitems[type].push(exp)
     }
    return ID//return the id of the added element
     }
     //Removes an item from an array based on the type and id
    export var removeItem=function(type,idEl){
    
        var itemIDs= data.allitems[type].map(function(element){
             return element.id
             })
        
    var del_index=itemIDs.indexOf(idEl)//Finding the index of the id we want to delete in the array
    
    if(del_index > -1){
        data.allitems[type].splice(del_index,1)//deleting the item
    }
    
     }
     var resetAll=function(){
        data.allitems.exp=[]
        data.allitems.inc=[]
        
    }
   var resetotals=function(){
        data.totals.exp=0
        data.totals.inc=0
   }

    var  resetB=function(){
            data.budget=0
        }
    var  resetP=function(){
            data.percentage=-1
        }
    
     export var reset=function(){
        resetAll()
        resetotals()
        resetB()
        resetP()

 } 


     
     
    
    

     

    
    

    