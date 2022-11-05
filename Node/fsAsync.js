let fs =require ('fs')

//function to write data
let writeData=()=>{
    fs.writeFile('viewwww/view.txt','beautiful view',(err)=>{
        if(err){
            console.log("err",err)
        }else{
            console.log("data written successfully")
            fs.readFile('view/view.txt',(err,data)=>{
                if(err){
                    console.log("err in read",err)
                }else{
                    console.log("data:",data.toString())
                }
            })
        }
    })
}

// to create a folder
fs.exists('view',(exists)=>{
    if(!exists){
        fs.mkdir('view',(err)=>{
            if(err){
                console.log("err",err)
            }else{
                console.log("successfully created the folder")
                writeData()
            }
        })
    }else{
        writeData()
    }
})




fs.exists('viewwww',(exists)=>{
    if(!exists){
        fs.mkdir('viewwww',(err)=>{
            if(err){
                console.log('error')
            }else{
                writeData()
            }
        })
    }else{
        writeData()
    }
})