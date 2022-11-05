// OBJECT WITHOUT NEW KEYWORD
var pen={
    name:"Cello",
    price:"10rs",
    modle:"pinpont",
    p:function(){
        return pen.name+" "+pen.price
    }
}
console.log(pen.p());

// Object with keyword
var shoe = new Object()
shoe.brand="bata"
shoe.price=1000
shoe.size=9
shoe.isAvailale=true
shoe.stamp=function(){
    return shoe.brand+" "+shoe.price
}
console.log(shoe.stamp());  