

//1. değişkenler
//2. veri tipleri
//3. karar yapıları
//4. operatörler (ve/veya)
//4. döngüler
//5. dizi işlemleri
//6. obje işlemleri/class yapısı
//7. es6 özellikleri

// ön bildirim - değişkenin adı =(atama operatör) - atanacak değer


var insanlar=[
    {
        isim:"emre",
        meslek:"frontend developer",
        yas: 34,
        seviye:0
    },
    {
        isim:"ahmet",
        meslek:"frontend developer",
        yas: 34,
        seviye: 1
    },
    {
        isim:"mehmet",
        meslek:"frontend developer",
        yas: 34,
        seviye:2
    }
]



//Veri Tipleri
/* 
    1. sayısal değerler(tam,ondalık) number/float
    2. metinsel değerler (String)
    3. mantıksal değerler (boolean - true/false)
    4. diziler -> içerisinde birden çok eleman,değişken,veri tipi saplayan bir yapı
    5. object -> bir varlığa ait ortak özellikleri tek bir çatı altında toplamaya yarar
*/

/* karar yapıları (programın hangi durumda ne yapacağına karar vermek) */
/* matematiksel operatörler operatörler -> <,>,<=,>=,===,+,-,/,%,*  */
/* mantıksal operatörler -> && (ve) , || (veya)  */


/* vizenin %40'ı, finalin %60'ı alınır. genel ortalama 50nin altında kalır,üstü geçer  */
/* var vize=90
var final=95

var genelOrtalama=(vize*0.4)+(final*0.6)
console.log(genelOrtalama)

if(genelOrtalama < 50){
    console.log("dersten kaldınız, notunuz ff")
}else if(genelOrtalama >= 50 && genelOrtalama < 70){
    console.log("dersten geçtiniz, notunuz dc")
}else if(genelOrtalama >= 70 && genelOrtalama < 90){
    console.log("dersten geçtiniz, notunuz ba")
}else{
    console.log("dersten geçtiniz, notunuz aa")
}
 */

/* döngüler */
//console.log(insanlar[2].isim)
for(var sayac=0;sayac < insanlar.length;sayac++){
    if(insanlar[sayac].seviye === 0){
        console.log(insanlar[sayac].isim," juniordur")
    }
    if(insanlar[sayac].seviye === 1){
        console.log(insanlar[sayac].isim," mid levelder")
    }
    if(insanlar[sayac].seviye === 2){
        console.log(insanlar[sayac].isim," seniordur")
    }
}


