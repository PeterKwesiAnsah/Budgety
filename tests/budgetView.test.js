import  {format} from '../src/js/view/budgetView'
test('format string',()=>{
expect(format).toBeDefined()
})
test('Returning a string from a integer values',()=>{
    expect(format(45)).toBe('45.00')
    expect(format(450)).toBe('450.00')
    expect(format(4500)).toBe('4,500.00')
    expect(format(45000)).toBe('45,000.00')
})
test('Returning a string from single point decimal values',()=>{
expect(format(40.5)).toBe('40.50')
expect(format(400.5)).toBe('400.50')
expect(format(4000.5)).toBe('4,000.50')
expect(format(40000.5)).toBe('40,000.50')

})
test('Returning a string from two decimal points values',()=>{
    expect(format(40.50)).toBe('40.50')
    expect(format(400.50)).toBe('400.50')
    expect(format(4000.50)).toBe('4,000.50')
    expect(format(40000.50)).toBe('40,000.50')
    
    })

