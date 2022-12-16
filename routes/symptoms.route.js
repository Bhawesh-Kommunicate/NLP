// const {getSymptomsController} = require("../controller/symptomsController")

const { StoreSex, StoreAge ,SymptomStore } = require("../controller/symptomsController");

// const {StoreSex} = re
const getSymptoms = (app) => {
  app.post("/symptoms/api/v1/Sex", StoreSex);
  app.post("/symptoms/api/v1/age", StoreAge);
  app.post("/symptoms/api/v1/SymptomStore" ,SymptomStore )
};

module.exports = { getSymptoms };
