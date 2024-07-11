const pdfParse=require("pdf-parse");
const check=async(req,res,next)=>{
    return res.json({
        status:true,
        message:"Server is running......"
    })

}

// js to detect pdf
const detectPdf=async(req,res,next)=>{
    if(!req.files && req.files.pdfFile){
        
        return res.status(400);

    }
    pdfParse(req.files.pdfFile).then(
        (result)=>{
            detectedText=result.text
         return result.text;
        }
    ).then(
        (text)=>{
            fetch(
                "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
                {
                    headers: { Authorization: "Bearer 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"},
                    method: "POST",
                    body: JSON.stringify({"inputs":text}),
                }
            ).then((ress)=>{
                return ress.json()
            }).then((response)=>{
              
                console.log(response);
                let summary=response.summary_text
                console.log(response.summary_text);
           

        res.json({
            summary:summary,
            text:detectedText
        })
            })

        }
    

    )
    // console.log(req.files.pdfFile);
  
}




// js of translation
const { spawn } = require('child_process');
const translate=async(req,res,next)=>{

    let text=req.body.data


    let lang=req.body.selectedL
    let splits = text.split(/(\s+)/);
    let words = splits.filter((x) => x.trim().length>0);
    let count = words.length;



    if(lang=="hi"&&count<4){
        lang="fhi"

    }
    if(lang=="hi"&&count>10){
        lang="fhi"

    }

    let trans;
    console.log("here=",lang);
    const pythonProcess = spawn('python', ['main.py',text,lang]);
    
    pythonProcess.stdout.on('data',(data) => {
      trans=data.toString()
      console.log(trans);
      let hText=trans.replace("\r\n","")
      let resText;
     

      // console.log(trans);
      res.json({
        translatedText:hText,
        originalText:text
    })
    
    pythonProcess.stderr.on('data', data => {
        console.log('Error output from Python:', data.toString());
      });
    
    });
    
    
    
    
    
    }



















module.exports = {
   check,detectPdf,translate
}