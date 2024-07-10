const mongoose=require('mongoose')

describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://ravitejachowdary266:Raviteja369@cluster0.sjkn5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose.connect(url);
    })

    test('MongoDB connected to server', ()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});