// const {CheckObj} = require("../Config/data")
const {
  symptomsData,
  DiagonsisData,
} = require("../service/symptomsData.service");

let CheckObj;

const StoreSex = (req, res) => {
  CheckObj.sex = req.body.sex;
  // console.log(CheckObj);
  return res.status(200).json({
    message: "data stored Successfully",
    success: "true",
    status: "200",
    data: CheckObj.sex,
  });
};

const StoreAge = (req, res) => {
  CheckObj = {
    symptoms: [],
  };
  if (CheckObj.age) {
    CheckObj.age = Number(req.body.age);
  } else {
    CheckObj.age = Number(req.body.age);
  }

  // console.log(req.body.age , "++++++++++++++++")
  // console.log(Number(CheckObj.age));

  return res.status(200).json({
    message: "data stored Successfully",
    success: "true",
    status: "200",
    data: CheckObj.age,
  });
};

const SymptomStore = async (req, res) => {
  let data = await symptomsData(req.body.symptoms, CheckObj.age);
  if (!CheckObj.symptoms.includes(data.data.mentions[0].id) && CheckObj.age) {
    if (CheckObj.symptoms.length > 2) {
      
      CheckObj.symptoms.shift();
      CheckObj.symptoms.push(data.data.mentions[0].id);
    } else if (CheckObj.age) {
     
      console.log(data.data.mentions[0]);
      CheckObj.symptoms.push({
        id: data.data.mentions[0].id,
        choice_id: data.data.mentions[0].choice_id,
      });

     
      console.log(CheckObj);
    }
  }
  // console.log(CheckObj.age)
  if(CheckObj.symptoms.length >= 3){
    diagonsis(CheckObj.symptoms ,CheckObj.sex, CheckObj.age  )
  }
  let symptomsSize = CheckObj.symptoms.length;

  let ans = CheckObj.symptoms.join(" and ");

  return res.status(200).json({
    message: "Successflly Added the symptoms",
    success: true,
    data: ans,
    len: symptomsSize,
  });
};
// }

const diagonsis = async (arr,sex,age) => {
  let response = await DiagonsisData(arr,sex,age);
if(response){
  console.log(response.data)
}else{
  console.log("no response ----------")
}
  // console.log(response.data);
};

// getSymptomsController
module.exports = { StoreSex, StoreAge, SymptomStore };
