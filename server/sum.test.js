const sum =require('./test/sum')

//jest test cases
//test function to test
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal

    //toEqual()-> to value should be equal
})
test('Object in array',()=>{
    const data ={one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6});
})

//toBeNull->if the recieved value is Null
test("Value is NULL",()=>{
    const n=null;
    expect(n).toBeNull();
})

//toBeDefined->if a value/variable is defined or not
test('Value is defined',()=>{
    const a=1;
    expect(a).toBeDefined()
})

//toBeTruthy->received values should be truth
test('Value is Truthy',()=>{
    const bool=true
    expect(bool).toBeTruthy();

})


//toBeFalsy
test('Value is Falsy',()=>{
    const bool=false
    expect(bool).toBeFalsy();

})