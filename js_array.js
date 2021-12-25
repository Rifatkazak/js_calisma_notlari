

// .includes()
// Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
// true or false dödürür..


{/* .sort()
Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.
const sayilar = [3,5,2,10,4];

sayilar.sort(function(a,b) {
    return b-a;
});
console.log(sayilar);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.
 */}

{/* .reduce()
Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

const sayilar = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici,0);

console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.*/}

let items = [1,2,3,4,5]

// array içinde array
let femaleUsers = ["ayşe", "hülya", "merve"]
let maleUsers = ["ahmet", "hasan", "mehmet"]

// erkek ve kadın kullanıcıları items içine eklemek 
items.unshift(femaleUsers) // bir arrayi diğer arrayin başına ekler
items.push(femaleUsers) // bir arrayi sonuna ekler 

// tüm arrayleri tek bir array olarak döndürmek için

// array içerisindeki öğleri ayırmak  --> splice(pos, item))

let newItems = items.splice(2,4) // item içinde index 2 den başlar 4 adet alır

// array içindedi öğenin index bilgisini bulmak
items.indexOf("hülya") // kaçıncı indexte olduğunu gösterir..

//array kopyalamak 
let copyItems = items // bu şekilde kopyalarsak daha sonra copyitems da yapacağımız değişiklikler items da da olur..

// array kopyalamak için slice kullan!!
let copyItems = items.slice()

// ya da 
let newItems = [...items] // es6 sonrasında şeklinde de kopyalama yapabiliriz..

//array içi bilgiyi sitringe çevirmek
console.log(maleUsers.toString()) // tüm array elemanlarını stringe çevirir.araya virgül koyar
console.log(users.join("" --- "")) // şeklinde araya neyle ayırmak istersek o şekilde stringe çevirir..

// istenilen index bilgisine öğe eklemek --> splice(index , 0 , value)
console.log(maleUsers.length-1 , 0 , "ahmet") // sondan bi önceki elemana "ahmet " ismini ekler..





