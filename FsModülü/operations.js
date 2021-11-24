const fs = require('fs');

async function readFile(filePath) {
    try {
     await fs.readFile(filePath,'utf-8',(err)=> {
         if(err) console.log(err);
         else
         console.log("Json Dosyası Başarılı Şekilde Okundu")
        
        });
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
  };
async function writeFile(filePath) {
      await fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}','utf-8' ,(err) =>{
        if(err) console.log(err)
        else
        console.log("Json Dosyası Başarılı Şekilde Oluşturuldu")
     })
    
  }
async function appendFile(filePath) {

    await fs.appendFile(filePath, ',{"name": "Hilmi", "slary": 5000}','utf8', (err, data) => { 
        if (err) console.log(err); 
        else
         console.log("Yeni veriler Eklendi")     
                                                       
    });
  }
  async function deleteFile(filePath) {
         await fs.unlink('employees.json',(err) => {
            if(err) console.log(err);
            console.log("Dosya Silindi")
        });            
  }


var allOperations = async function() {
    let filePath = 'employees.json'
    await writeFile(filePath)
    await readFile(filePath)
    await appendFile(filePath)
    await deleteFile(filePath)
}
allOperations();