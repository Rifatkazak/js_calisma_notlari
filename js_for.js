let user = ["lorem", "ipsum", "dolar"]

// for döngüsü ile herhangi bir şeyi otomatik olarak döndürebiliriz..
// başlangıç atamsı, varış nnoktası , ve adım olarak structure tanımlanabilir.

const userListDom = document.querySelector("...");

for(index=0;index<user.length;index++) {
    const liDom = document.createElement("li");
    liDom.innerHTML = eser[index]
    userListDom.appendChild(liDom)
}