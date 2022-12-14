
const {symptomsData} = require("../service/symptomsData.service")
const getSymptomsController = async(req,res)=>{
    const response = await symptomsData(req.body.text , req.body.age)
    // console.log(response.data.mentions[0].name,"//////////////////////////////////////////")
    console.log(response)
    if(response.data.mentions != []){
        return res.status(200).json({
            message:"Data Extracted Successfully",
            success:true,
            data : response.data.mentions[0].name,
    
        });
    }else{
        return res.status(404).json({
            message:"Data Entered wrong",
            success:true,
            // data : response.data.mentions[0].name,
    
        });
    }
  
}

module.exports = {getSymptomsController}