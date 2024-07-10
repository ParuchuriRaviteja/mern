
const fetchData =require('./test/async')

test('callback the data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(error){
            done(error);
        }
    }
    fetchData(callback)
})

/*
test('callback My data',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(data.id);
            done();
        }catch(error){
            done(error);
        }
    }
    MyData(callback)
})

//mock fuction
test('Mocking callback function',)

*/