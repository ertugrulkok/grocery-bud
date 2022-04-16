var girilen, secilen;
var eklenen, btnTamamla, btnSil, sonuc;
var todoInput = document.querySelector(".list_input");

var yapilacaklar = document.getElementById("listeyapilacaklar");


function listeyeEkle() {
  girilen = document.getElementById("txtYapilacaklar").value;

  if (girilen != "") {
    eklenen = document.createElement("li");
    document.getElementById("listeyapilacaklar").appendChild(eklenen);
    eklenen.innerHTML = girilen;
    eklenen.setAttribute("class" , "ankara")

 
    btnTamamla = document.createElement("img");
    eklenen.appendChild(btnTamamla);
    btnTamamla.setAttribute("src", "cross.png");
    btnTamamla.addEventListener("click", düzenle);

    btnSil = document.createElement("img");
    eklenen.appendChild(btnSil);
    btnSil.setAttribute("src", "check.png");
    btnSil.addEventListener("click", sil);
    todoInput.value = "";

    
  } else alert("Lisyeye bir şey giriniz");
}

function sil() {
  secilen = event.currentTarget.parentNode;
  secilen.remove();
}

function düzenle() {
  secilen = event.currentTarget.parentNode;
  todoInput.value = eklenen.innerText;

  sil();
}

function hepsini_sil() {
  yapilacaklar.querySelector(".ankara").remove();
  
}