import Sum from "./Sum"

// test("first",()=>{
//     let data=100;
//     expect(data).toBe(100)
// })
// it("second",()=>{
//     let data=100;
//     expect(data).toBe(80)
// })

// describe("sum function testing",()=>{
//     test("first",()=>{
//         expect(Sum(1,2)).toBe(4)
    
// })
// it("second",()=>{
//     expect(Sum(1,2)).not.toBe(80)
// })
// })

describe("object testing",()=>{
    test("object",()=>{
        let data=Sum(1,5)
        expect (data).toEqual({name:"Jack"})

    })
})