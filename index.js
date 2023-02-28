let arr=[2,6,1,3,4]
let asscendingArr=arr.sort(function(a,b){return a-b})
console.log(asscendingArr)


let panWeight=50;
let panHeight=5;
function bmi(w,h){
return(w/ h**2)
}
let pankajsBmi = bmi(panWeight,panHeight)
console.log(pankajsBmi)

let prajwalWei=75;
let prajwalHei=5;
let prajwalBmi= bmi(prajwalWei,prajwalHei)
console.log(prajwalBmi)

if(prajwalBmi>pankajsBmi){
    console.log("prajwals bmi is grater than pankaj")
}else{
    console.log("pankajs bmi is grater than prajwal")
}

let arr2=[2,6,3,5,7]
var order=[]
for(i=0;i<=arr2.length;i++){
    if(arr2[i]<arr2.length-1)
      order.push(arr2[i])
    }

console.log(order)

