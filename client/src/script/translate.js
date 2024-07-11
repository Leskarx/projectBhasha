const summary=localStorage.getItem("summary");
const detectedText=localStorage.getItem("text");
const textArea=document.getElementById("textArea");
// js for mic
const start=document.getElementById("start")
let speech = true;
    let globalTranscript;
    window.SpeechRecognition = window.SpeechRecognition
      || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      
      globalTranscript = transcript 
    });
 
    start.addEventListener("click", () => {
      if (speech == true) {
			recognition.start(); 
           
			recognition.addEventListener('end', ()=>{
        textArea.value=globalTranscript;
        console.log(globalTranscript)
      
        // if(globalTranscript !== ""){
        //   globalTranscript
        // }
        // globalTranscript = ""
		      }); 
      }
    })



// js for mic ends here

const translateB=document.getElementById("translateButton")
// checking if their is any value in the detected text 
if(detectedText){
    textArea.value=detectedText

}else{
    textArea.value="";

}



// js of button
const insideBox=document.getElementById("insideBox")
const lan=document.querySelector(".lan")
const lan2=document.querySelector(".lan2")
const lan3=document.querySelector(".lan3")
const lan4=document.querySelector(".lan4")
const lan5=document.querySelector(".lan5")
const mainId=document.getElementById("mainId")
const PTag=document.querySelector(".pTag")
let tolang;    //imp variable 
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




// sending fetch req to our server
const translateButton=document.getElementById("translateButton");
 
 const outputField=document.getElementById("outputField");


 async function translatee() {
    // console.log(inputField.value);
    translateButton.innerText="Translating......."

    console.log(tolang);
    const data = {
       data:textArea.value,
       selectedL:tolang||"hi"
    };
    console.log(data.selectedL);
    const response = await fetch("http://localhost:5005/translate", {
        method: "post", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result.translatedText);
outputField.innerText=result.translatedText;
translateButton.innerText="Translate"


}




