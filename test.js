const cm=require("./compare");
cm.detal("a2.zip","a1.zip","out.zip")

cm.on("prograss",(compared,total,filename)=>{
    console.log(compared,total,filename)
})