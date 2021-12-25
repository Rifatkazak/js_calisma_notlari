// break --> işlemi durdur
//continue --> devam ettir

//şu olana kadar işleme devam et  işlem gerçekleşince durdur.. break

for(let counter = 0 ; counter < 10 ; i++) {
    console.log(counter)
    if (counter === 5) {
        break // conter 5 olunca çıkar o yüzden 5 e kadar yazdırır 5 i yazdırmaz 
    }
}

for(let counter = 0 ; counter < 10 ; i++) {
    
    if (counter === 5) {
        continue // conter 5 olunca devam eder sadece 5 yazdırmaz 10 a kadar yazdırır.. 
    }
    console.log(counter)
}

// herhangi bir array içinceki bilgileri yazdırmak istediğimizde break veya continue kullanılabilir..
// kısaca break ile belirtilen öğeye kadar alır ama conutinue ile belirtilen öğe hariç diğerlerini almak için kullanılabilir.

