{/*
Objeler, içerisinde birden fazla değeri depolayan yapılardır. 
Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler 
ve her bir değer string veya sembol ile isimlendirilebilir.
Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler.
 Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, yeni bir hafıza adresine sahip olur. 
 Çünkü primitive değerlerin aksine objeler, JavaScript istemcisinin belleğinde, sahip oldukları değerlerle değil, 
sistemin atadığı hafıza adresleriyle kayıtlıdırlar. Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz.
*/}

//Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla.
// Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir. 
//  Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır. 
//Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. 
// Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.

// array ler de object type nda  tutulur..
// obje oluşturmak için

let item = new Object() // YA DA
let items = {} // şeklinde oluşturulabilir.

// key value ilişkisi ile birlikte istediğimiz verilere ulaşabiliriz.

let laptop = { // tek satırda yazılırsa virgülden sonra boşluk koymayı unutma..
    brand :"Apple",
    modal : "macbookPro",
}
//KEY tanımlamak --> key başına sayı koyulmaz eğer koyulma istenirse "1modal" şeklinde tırnak içine almak gerekir.
// "2kg" : 2 olarak key tanımlanırsa --> laptop1["2kg"] olarak çağırılması lazım..
// boşluk , - value kelimeler arasında kullanılmaz..
//camelCase kullanılabilir..
//  ANAHTAR BİLGİSİNE YENİ DEĞER EKLEMEK İÇİN

laptop1.brand = "Mac"

//Anahtar key lere ulaşmak
let KEYS = Object.keys(laptop) 

//Anahtar value lere ulaşmak
let values = Object.values(laptop)

{/*
function objectify (key, value) {
   return {
[key]: value
  }
}
objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer
*/}

// JSON Veri Tipini Obje Olarak Kullanmak
{/*
Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile 
bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz. 
Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. 
Bu işlem çok basit bir şekilde yapılabilir.
*/}

//JSON Metodları

{/*
let person = {
  name: "Jack",
  age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject); 
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 
*/}
