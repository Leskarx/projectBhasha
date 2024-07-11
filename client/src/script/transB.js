// js of button
const insideBox=document.getElementById("insideBox")
const lan=document.querySelector(".lan")
const lan2=document.querySelector(".lan2")
const lan3=document.querySelector(".lan3")
const lan4=document.querySelector(".lan4")
const lan5=document.querySelector(".lan5")
const mainId=document.getElementById("mainId")
const PTag=document.querySelector(".pTag")
let tolang;
let change=true;
insideBox.addEventListener("click",()=>{
    if(change==false){
        insideBox.style.width = "35rem"

    }
    else{
        insideBox.style.width = "63px"
        
    }
    
    
    // lan3.classList.add("language");
    lan.classList.remove("lan");
    lan2.classList.remove("lan2");
    lan3.classList.remove("lan3");
    lan4.classList.remove("lan4");
    lan5.classList.remove("lan5");

})

function setLan(clickLangValue,clickLang){
    tolang=clickLangValue
    console.log(tolang);


    mainId.innerText=clickLang
    // lan.classList.add("lan");
    // lan2.classList.add("lan2");
    // lan3.classList.add("lan3");
    // lan4.classList.add("lan4");
    // lan5.classList.add("lan5");
    change=!change
    // insideBox.style.width = "100px"


}
// js of button ends here

// js of translate Button

