const textArea=document.getElementById("textArea");
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

    // js for button

