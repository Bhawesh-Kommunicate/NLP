
const axios = require("axios")

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

module.exports = {symptomsData}