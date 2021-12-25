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





