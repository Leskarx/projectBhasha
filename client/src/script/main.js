const files=document.getElementById("files")
localStorage.clear();

files.addEventListener("change",()=>{
    const formData= new FormData();
    formData.append("pdfFile",files.files[0]);
    fetch("http://localhost:5005/pdf",{
     method:"post",
     body:formData
    }).then((res)=>{
 
     return res.text();
    }).then((ext)=>{
 
      //  textArea.value=ext
      const obj=JSON.parse(ext);
      localStorage.setItem("summary",obj.summary)
      localStorage.setItem("text",obj.text)
      // localStorage.setItem("summary",JSON.parse(ext)) 
      //  console.log(JSON.parse(ext));

       window.location.href="../src/translatePage.html"
       
       
     
     
    })  
 
 })