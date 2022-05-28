const currentAge=19;
const allowed= currentAge>=18; //eger yasi 18 ise kullanabilsin. allowed izin vermek ya.

if (currentAge < 18){
    console.log("You can drive legally.");

}else{
    console.log("You are not allowed to drive");
}
// eger bir durum varsa if ve ardindan else kullaniyoruz. ama eger birden fazla durum varsa else if yazarak durum  (condition yani sart )atamasi yapiyoruz.

let grade = 86;

let mark;
if(grade>=90){
     mark ="AA"
}else if (grade>=80){
     mark = "BB"
}else if(grade>=70){
     mark="CC"
}
console.log("mark ", mark)
// yukarida birden fazla sart oldugu icin else if kullanildi.


let grd = 79;

let mrk;
if(grd>=90){
    mrk ="AA"
}else if (grd>=80){
    mrk = "BB"
}else if(grd>=70){
    if(grd<80) //bu sekilde birden fazla if kullanrak sarti artirabiliriz.
     mrk="CC"
}
console.log("mrk ", mrk)



//TYPE CONVERSION AND TYPE COERCION type conversion olursa biz kendimiz degisiklik yapiyoruz. type coersion olursa javascript bizim yerimize degisikligi yapiyor.

console.log (typeof "18")
console.log (typeof Number ("18") ) //bir önceki string olan sayisal veriyi number ile numbera cevirdik. tam tersi ise yani number i stringe cevirecek olursak;

console.log (typeof String(18))//stringe dönüstürdük.
console.log(Number("Gamze")) //Not a Number kisaca NaN sayi degil diyor.
console.log(typeof Nan)
console.log(Number("3,14")) // NaN sonucu bu. sayilarin arasina virgül degil nokta konulmali.



let num="5"


let mult="5" * 2; // number yamadan js kendisi carpma islemini yapti. js in kendi özelligi. type coersion, normalde number yazmak lazim.

console.log ("mult ", mult)

 //mesela;
 let curk = num * 2;
 console.log("curk ", curk)
 let divide= 10 / num
 console.log("divide ", divide)


 //mesela;
//CARPMA
 let felt = num*2;
 console.log("felt ", felt)
//BÖLME
 let dvde= 10 /num
 console.log("dvde ", dvde)

//CIKARMA

 let minus= num-1
 console.log("minus ", minus) //yani 5ten bir cikardi. 4

 //TOPLAMA

 let add =num+5
 console.log("add ", add) //burada 5 ile 5 i toplamadi 55 yazdi bunun icin;
 console.log(typeof add) //görüldügü gibi type i string cikiyor.yukarisinin.


 let add2= Number(num) +5
 console.log("add2 ", add2) //burada text olmadigini sayi oldugunu hatirlattik.  yukarida text olarak okudu.bu nedenle 55 yazdi yanyana gibi gördü.

let a="1" //sayisal veri degil text olarak okuyor. bu nedenle 11 oldu. string olarak görüyor.
a +=1 //11
a-=1 //10 number oluyor. 
console.log(a)

//TRUTHY AND FALSY VALUES

/*js  5 adet falsy olarak gördükleri deger sunlardir:

-0
-""
-undefined
-null
-NaN   javascript bunlari false mis gibi degerlendiriyor.*/

let cash =0;
if(cash==0){
    console.log("find a job")
}//burada zaten yukarida parasi yok sifir. ama ifli yapida sifir oldugunu tanimlaman belirtmek gerekiyor. yukarida cash degerini sayisal herhangi bir deger verirsek mesela 10, mutlaka true dönecektir.

// if li yapida illaki susulu parantez icine alarak yazmak zorunda degiliz. tek satirlik bir kodsa.mesela asagidaki gibi.
if(cash==0) console.log("No jobs found")


//AND OPERATORU_________________________

/* 
bu operatorde 
true --true sonuc true olur
true --false sonuc false olur
False --true sonuc False olur.
False --False Sonuc False olur.

OR OPratoru___________________________

true --true sonuc true olur
true --false sonuc true olur
False --true sonuc true olur.
False --False Sonuc False olur.

NOT OPERATORU___________________________
burada (!) degilini almak yani tersini almak demek.

True -- ise degilini aldigimizda False olur
False --ise degilini aldigimizda True olur */

//AND OPERATORU
/*
const h= have licence //true burada hem lisansi var
const b=bigger than 18//true buradada 18 yasindan buyuk
 
h && b= can drive//true bu isaret && ve demek
!h && b = cannot drive //false
h && !b = cannot drive //false
!h && !b = cannot drive //false


OR OPEratoru___________________________

const x= bigger than 65
const y= chronic disease

x || y = risky true or isareti yan yana iki cizgi.
!x || y = risky true
x || !y = risky true
!x || !y = not risky true

*/
// SWITCH STATEMENT

/*switch (expression){
    case x:
    code block
    break
    case y:
    code block
    break
    case z:
    code block
    break
    case m:
    code block
    break
    case f:
    code block
    break
    case t:
    code block
    break
} // sürekli ifli yapi else if kullanilmasina karsin karmasik yapidan kurtulmak icin bu düzen takip ediliyor.*/

let day= "Saturday"

switch(day){
    case "Monday":
        console.log("there is not class, you can practice.")    
        break
    case "Tuesday":
        console.log("Css.")    
        break
    case "Wednesday":
        console.log("Js.")    
        break
    case "Thursday":
        console.log("No class.")    
        break
    case "Friday":
        console.log("Css.")    
        break
    // bu 5 günden biri degilse default yazdir demek icin;
    default :
    console.log("holiday")

 /*     case "Saturday":
        console.log("Holiday.")    
        break
        case "Sunday":
        console.log("Holiday.")    
        break */

}// eger ikisine ayni muamelenin görülmesini istersek birinin break yazisini kaldirmaliyiz.tek satirda yazilisi su sekilde. if day=="saturday" || day == "sunday"
 
//TERNARY OPERATOR___________________________


const gradeX =50

 if(gradeX>=60){
     console.log("Passed")
 }else{
     console.log("Failed")
 }

 //yada soyle yapiyoruz kisaca if ten daha kolay;
 gradeX >=60 ? console.log("Passed"): console.log("Failed") // bu kosul dogruysa sol kismi yanlissa sag tarafi calistirir. burada puani 50 oldugu icin Failed oldu.
 const weather = "hot"
 const season = weather === "hot" ? "summer" :"winter"

 console.log ("season: ", season)

 //NULLISH OPERATOR___________________________

 const val = "xyz"

 const value = val ?? "default value"

 console.log ("values", value)

 // özetle
 console.log ( 0 || undefined || "Ahmet" || 2) // ilk dogruyu gördügünde or yapisinda zaten bir true bizi dogruya götürüyordu. sonuc ilk true olan Ahmet yazdirir. ilk ikisi false. burada or yapisi gecerli.

 //ve yapisinda ise ;
 console.log( "Ahmet" && 0 && 2 && undefined) //ilk false olan 0 alir.