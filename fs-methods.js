import fs from "fs"
 export const save = (content) => {
    return new Promise((resolve , reject) => {
        fs.writeFile("./users.json" , JSON.stringify(content),  (err) => {
            if(err){
                reject(err)
            }
            resolve(content)
            console.log("archivo subido correctamente")
        })
    })
   
}

export const get =  (file ) => {
    return new Promise ((resolve , reject) => {
    fs.readFile(file ,(err , data ) => {
            if(err) {
                reject(err)
            }else{
                resolve(JSON.parse(data))
            }
        })
    })
}