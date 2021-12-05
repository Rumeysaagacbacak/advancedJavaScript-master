function addToCart(quantity,productName="Elma") 
{
    console.log("Sepete eklendi : ürün : "
    +productName + " Adet : "+quantity)
}
//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>
{
    console.log("Hello World!")
}
sayHello()

let sayHello2=function () 
{
    console.log("Hello World! 2")
}
sayHello2()

function addToCart2(productName , quantity ,unitPrice) 
{
    
}

addToCart2("elma",5,10)
addToCart2("armut",2,20)

let product1 = {productName:"Elma",
unitPrice:10,quantity:5}

function addToCart3(product) 
{
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

//cıktısı karpuz olur.
//sayılar değer tip basit tip 
//objeler erraylar referans tip  
//çıktısı 20 olur 

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1)


function addToCart4(x) 
{
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)
//fonsiyonu sonuna bırakın.
//rest operatöe ... koydugunda oluyor
function add(birşey,...numbers) //rest operatöe ... koydugunda oluyor
{   let total=0
    for (let i = 0; i < numbers.length; i++) 
    {
       total=total+numbers[i]
    }
    console.log(total)
    console.log(birşey)
}

add(20,30)
add(20,30,40)
//add(20,30,40,50)

let numbers=[30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnodoluSehirleri]] = 
[   {name:"İç Andolu",popuation:"20M"},
    {name:"Marmara",popuation:"30M"},
    {name:"İç Karadeniz",popuation:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstnabul", "Bursa"],
        ["Trabzon", "sinop"],
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.popuation)
console.log(icAnodoluSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = 
{productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)






