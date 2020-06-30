import * as budget from '../src/js/models/budget'
//////////////////////////////////////////////////////////////////////////////////////////////
/*
   var data={
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
*/
beforeEach(()=>{
    budget.reset()//Used to clear the data structure before test
})
test('function Constructors' ,()=>{
    expect(budget.Income).toBeDefined()
    expect(budget.Expense).toBeDefined()
})

test('Creating an Income Object',()=>{
    const income=new budget.Income(1,20,'Salary')
    expect(income).toEqual({id:1,value:20,desc:'Salary'})
})
test('instance of Expense ',()=>{
    const expense=new budget.Expense(1,20,'Rent')
    expect(expense instanceof budget.Expense).toBeTruthy()

})
test('instance of Income ',()=>{
    const income=new budget.Income(1,20,'Salary')
    expect(income instanceof budget.Income).toBeTruthy()
})
test('Creating an Expense Object',()=>{
    const expense=new budget.Expense(1,20,'Rent')
    expect(expense).toEqual({id:1,value:20,desc:'Rent',perc:-1})
})
////////////////////////////////////////////////////////////////////////////////////////////
//if 'perEl' is a method of the expense
//test('perEl method...',()=>{
    //const expense=new budget.Expense(1,20,'Rent')

//})
test('Total function cal_totals defined',()=>{
    expect(budget.cal_totals).toBeDefined()

})
test('Total expenses with cal_totals',()=>{
    const expenses=[new budget.Expense(1,30,'Rent'),new budget.Expense(2,30,'Theft')]
    budget.data.allitems.exp=expenses
    expect(budget.cal_totals('exp')).toBe(60)

})
test('Total income with cal_totals',()=>{
    const income=[new budget.Income(1,70,'Salary'),new budget.Income(2,30,'Investment')]
    budget.data.allitems.inc=income
    expect(budget.cal_totals('inc')).toBe(70+30)

})
test('Expense perEl method zero or no income Totals ',()=>{
 
    const expense=new budget.Expense(1,20,'Rent')//The totals of the data object are defined to be zero
    expense.perEl()
    const percentage=expense.perc
    expect(percentage).toBe(-1)

})
test('Expense perEl method with income Totals ',()=>{
    const incomeTotal=40//Since the cal_totals passed the test we can now set the totals directly instead of creating new objects and calling the function
     budget.data.totals.inc=incomeTotal
    const expense=new budget.Expense(1,20,'Rent')
    expense.perEl()
    const percentage=expense.perc
    expect(percentage).toBe(50)

})
test('Calculating individual percentages of expenses',()=>{
    expect(budget.cal_percEl).toBeDefined()
})

test('Calculating individual percentages with no total income',()=>{
    const incomeTotal=0
    budget.data.totals.inc=incomeTotal
    const expenses=[new budget.Expense(1,30,'Rent'),new budget.Expense(2,30,'Theft')]
    budget.data.allitems.exp=expenses
    expect(budget.cal_percEl()).toEqual([-1,-1])
  

})
test('Calculating individual percentages with total income',()=>{
    const incomeTotal=40
    budget.data.totals.inc=incomeTotal
    const expenses=[new budget.Expense(1,30,'Rent'),new budget.Expense(2,30,'Theft')]
    budget.data.allitems.exp=expenses
    expect(budget.cal_percEl()).not.toEqual([-1,-1])
  

})

test('Calculating Total expense Percentages',()=>{
    expect(budget.cal_perc).toBeDefined()
})
test('Total expense percentage function cal_perc with no Total income and no Total expense ',()=>{

    budget.cal_perc()
    expect(budget.get_perc()).toBe(-1)//Functions starting with 'get' simply returns values
})

test('Total expense percentage function cal_perc with no Total income and Total expense ',()=>{
    const expenseTotal=40
 
    budget.data.totals.exp=expenseTotal
    budget.cal_perc()
    expect(budget.get_perc()).toBe(-1)
})


test('Total expense percentage function cal_perc with Total income and Total expense',()=>{
    const incomeTotal=60
    const expenseTotal=40
    budget.data.totals.inc=incomeTotal
    budget.data.totals.exp=expenseTotal
    budget.cal_perc()//Calculate expense percentage from Total income and Total expense
    expect(budget.get_perc()).toBeCloseTo(66)//
})

test('Calculating Budget',()=>{
    expect(budget.budget_cal).toBeDefined()
})
test('Budget Calculation from Total Income and Total expense',()=>{
  
    const income=[new budget.Income(1,70,'Salary'),new budget.Income(2,30,'Investment')]
    budget.data.allitems.inc=income
  
    const expenses=[new budget.Expense(1,30,'Rent'),new budget.Expense(2,30,'Theft')]
    budget.data.allitems.exp=expenses

    budget.budget_cal()//Calculate budget from Total income and expense
    expect(budget.get_budget()).toBe(40)

})
test('Adding Data items',()=>{
    expect(budget.add_data).toBeDefined()
})

test('Creating income or expense objects based on UI data using the add_data function',()=>{
    const Incomedata={type:'inc',value:20,desc:'Salary'}
    const Expensedata={type:'exp',value:50,desc:'Theft'}
    const incomeID=budget.add_data(Incomedata)
    const expenseID=budget.add_data(Expensedata)
    expect(budget.data.allitems.inc[0]).toEqual({id:incomeID,value:20,desc:'Salary'})
    expect(budget.data.allitems.exp[0]).toEqual({id:expenseID,value:50,desc:'Theft',perc:-1})


})
test('Removing Data items',()=>{
    expect(budget.removeItem).toBeDefined()
})
test('removing an income data item  ',()=>{
    const income=[new budget.Income(1,70,'Salary'),new budget.Income(2,30,'Investment')]
    budget.data.allitems.inc=income
  

    budget.removeItem('inc',1)//Removes the income object with id=1
    const index=budget.data.allitems.inc.findIndex(obj=>obj.id===1)//Checks if an income object with id=1 exists
    expect(index).toBe(-1)

})
test('removing an expense data item',()=>{
    const expenses=[new budget.Expense(1,30,'Rent'),new budget.Expense(2,30,'Theft')]
    budget.data.allitems.exp=expenses
    budget.removeItem('exp',2)//Removes the expense object with id=2
    const index=budget.data.allitems.exp.findIndex(obj=>obj.id===2)//Checks if an expense object with id=2 exists
    expect(index).toBe(-1)

})




