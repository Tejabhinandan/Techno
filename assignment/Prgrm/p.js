const num = prompt("enter the number");
let isPrime = true;
if (num == 1) {
    console.log("1 is either prime or not a prime num",num)
}else if(num>1){
    for(let i=2;i<num;i++)
    {
        if(num%i==0){
            isPrime=false
            break;
        }
    }
    if(isPrime){
            console.log(num,"its a prime num")
        }else{
            console.log(num,"its not a prime num")
        }
    }
