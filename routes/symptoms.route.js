const {getSymptomsController} = require("../controller/symptomsController")

const getSymptoms = (app)=>{
    app.post("/symptoms/api/v3", getSymptomsController)
}

module.exports = {getSymptoms}