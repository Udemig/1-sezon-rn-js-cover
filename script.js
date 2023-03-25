var insanlar = [
  {
    tc:1,
    isim: "emre",
    meslek: "frontend developer",
    yas: 34,
    seviye: 0,
  },
  {
    tc:2,
    isim: "ahmet",
    meslek: "frontend developer",
    yas: 20,
    seviye: 1,
  },
  {
    tc:3,
    isim: "mehmet",
    meslek: "frontend developer",
    yas: 18,
    seviye: 2,
  },
  {
    tc:4,
    isim: "veli",
    meslek: "frontend developer",
    yas: 43,
    seviye: 2,
  },
];

const baslik = document.getElementById("baslik");
const message = document.getElementById("message");
const insanlarElementi = document.getElementById("insanlar");
console.log(baslik);

for (var i = 0; i < insanlar.length; i++) {
  const myElement = document.createElement("li");
  myElement.style.color = "red";
  myElement.innerText = insanlar[i].isim;
  insanlarElementi.appendChild(myElement);
}

baslik.addEventListener("mouseenter", () => {
  message.style.visibility = "visible";
});

baslik.addEventListener("mouseleave", () => {
  message.style.visibility = "hidden";
});
/* function sayMyName(name){

} */
/* const sayMyName=(name="emre")=>{

} */
/* const name="emre"
const surname="harman"
//const fullname=name+" "+surname
const fullname=`${name} ${surname}`
console.log(fullname); */
const person = {
  name: "emre",
  surname: "harman",
};

/* destructing */
var { name, surname } = person;
/* template literals */
const fullname = `${name} ${surname}`;
console.log(fullname);

/* spread operator */
const person1 = {
  ...person,
  surname: "kılıç",
  age: 34,
};
const hayvanlar = [
  {
    isim: "tekir",
    cinsi: "kedi",
  },
  {
    isim: "pamuk",
    cinsi: "kedi",
  },
  {
    isim: "taci",
    cinsi: "köpek",
  },
];
/* const canlilar=[...insanlar,...hayvanlar]
console.log(canlilar); */

/* dizi metotlar (map,filter,find) */
/* map-> for olarak da kullanılabilir;önemli özelliği: geriye bir dizi döndürür */
/* var yasToplami = 0;
insanlar.map((insan, i) => {
  yasToplami = yasToplami + insan.yas;
});
console.log(yasToplami);
const ortalama = yasToplami / insanlar.length;
console.log(ortalama); */

/* filter-> yeni bir dizi oluşturur; ama içerisine verilen koşula uygun */
//const newArray=[]
/* for(var i=0;i<insanlar.length;i++){
    if(insanlar[i].yas > 20){
        newArray.push(insanlar[i])
    }
} */
/* const newArray=insanlar.filter(insan=>insan.yas > 20)
console.log(newArray); */


/* find -> filter gibi içerisine koşul yazılabilir;
ama filterdan farklı olarak bir dizi dönmez; aranan koşula ait ilk 
elemanı bulduğunda döndüyü tamamlar ve geriye bir dizi yerine elemanı döndürür
*/
/* var myPerson=null
for(var i=0;i<insanlar.length;i++){
    if(insanlar[i].tc === 3){
        myPerson=insanlar[i]
        break
    }
} */
var myPerson=insanlar.find(insan=>insan.tc === 3)

console.log(myPerson);