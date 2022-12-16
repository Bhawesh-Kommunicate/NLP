
const axios = require("axios");
// const { CheckObj } = require("../controller/symptomsController");
const {CheckObj} = require("../controller/symptomsController")

const symptomsData = async(text , age)=>{
    const response = await axios.post(
        'https://api.infermedica.com/v3/parse',
        // '{"text": "I often feel cold.", "age": {"value":30}, "include_tokens": true}',
        {
            'text': text,
            'age': {
                'value': Number(age)
            },
            'include_tokens': true
        },
        {
            headers: {
                'App-Id': '6b2c1128',
                'App-Key': 'ed31ef2357c0a91740327294a146c97d',
                'Content-Type': 'application/json'
            }
        }
    );
    // console.log(response.data.mentions[0])

    return response
}

const DiagonsisData = async(arr,sex,age)=>{
    if(age && sex){
    const response = await axios.post(
        'https://api.infermedica.com/v3/diagnosis',
        
        // '{\n        "sex": "female",\n        "age": {\n          "value": 25\n        },\n        "evidence": [\n          {"id": "s_47", "choice_id": "present", "source": "initial"},\n          {"id": "s_22", "choice_id": "present", "source": "initial"},\n          {"id": "p_81", "choice_id": "absent"}\n        ]\n  }',
        {
            'sex': `${sex}`,
            'age': {
                'value': Number(age)
            },
            'evidence': arr
        },
        {
            headers: {
                'App-Id': '6b2c1128',
                'App-Key': 'ed31ef2357c0a91740327294a146c97d',
                'Content-Type': 'application/json'
            }
        }
    );

    return response
}else{
    return undefined
}
// console.log(arr,sex,age ,"**&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
}

module.exports = {symptomsData , DiagonsisData}