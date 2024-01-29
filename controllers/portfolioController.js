const {PortfolioData, PortfolioValuesData} = require("../models/allpagesSchema");


const portfolioValuesGet = async (req, res) => {
  try {

      let findData = await PortfolioValuesData.findAll();
      if (!findData) {
        return res.status(500).json({ status: false, message: `data fetch error` });
      }
      return res.status(200).json({
          status: true,
          message: `success`,
          data: findData,
        });

  } catch (err) {
    return res.status(400).json({ status: false, error: err });
  }
};
const portfolioValuesPost = async (req, res) => {
    try {
      let newData = await PortfolioValuesData.create(req.body);

      if (!newData){
          return res.status(404).json({
              status: true,
              message: "failed, item not created",
              data: newData,
            });
      }

        else{
            return res.status(200).json({
                status: true,
                message: "success, item created",
                data: findData,
              });
        }

   


      
  
  
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
};

const portfolioValuesUpdate = async (req, res) => {
    try {
        
        let keywords = req.query;
        if (!keywords.id) return res.status(404).json({ status: false, message: `failed, id missing` });

        let findData = await PortfolioValuesData.findByPk(keywords.id);

        if (!findData){
            return res.status(404).json({
                status: true,
                message: "failed, item not found",
                data: newData,
              });
        }

        else{
          
            findData.gain = req.body.gain
            findData.gainLabel = req.body.gainLabel
            findData.unrelised = req.body.unrelised
            findData.unrelisedLabel = req.body.unrelisedLabel
            findData.status = req.body.status || findData.status;
    
            await findData.save();
            
            return res.status(200).json({
                status: true,
                message: "success, item updated",
                data: findData,
              });
        }

   


      
  
  
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
};

const portfolioValuesDelete = async (req, res) => {
    try {
      let keywords = req.query;
      if (!keywords.id) return res.status(404).json({ status: false, message: `failed, id missing` });
      else{
        let findData = await PortfolioValuesData.findByPk(keywords.id);
        if (!findData) return res.status(404).json({ status: false, message: `failed, data no found` });
        await findData.destroy();
        return res.status(200).json({ status: true, message: `success, data deleted` });
  
      }
      
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
  };



const portfolioGet = async (req, res) => {
    try {
  
        let findData = await PortfolioData.findAll();
        if (!findData) {
          return res.status(500).json({ status: false, message: `data fetch error` });
        }
        return res.status(200).json({
            status: true,
            message: `success`,
            data: findData,
          });
  
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
  };
  

    
  const portfolioPost = async (req, res) => {
    try {
      let newData = await PortfolioData.create(req.body);

      if (!newData){
          return res.status(404).json({
              status: true,
              message: "failed, item not created",
              data: newData,
            });
      }

        else{
            return res.status(200).json({
                status: true,
                message: "success, item created",
                data: findData,
              });
        }

   


      
  
  
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
};
  
  const portfolioUpdate = async (req, res) => {
      try {
        let keywords = req.query;
        if (!keywords.id) return res.status(404).json({ status: false, message: `failed, id missing` });

        let findData = await PortfolioData.findByPk(keywords.id);

        if (!findData){
            return res.status(404).json({
                status: true,
                message: "failed, item not found",
                data: newData,
              });
        }
  
          else{

            findData.portfolioName = req.body.portfolioName,
            findData.gainTotal = req.body.gainTotal,
            findData.unrelisedValue = req.body.unrelisedValue,
            findData.unrelisedPer = req.body.unrelisedPer,
            findData.status = req.body.status || findData.status;
      
              await findData.save();
              
              return res.status(200).json({
                  status: true,
                  message: "success, item updated",
                  data: findData,
                });
          }
  
     
  
  
        
    
    
      } catch (err) {
        return res.status(400).json({ status: false, error: err });
      }
  };
  const portfolioDelete = async (req, res) => {
    try {
      let keywords = req.query;
      if (!keywords.id) return res.status(404).json({ status: false, message: `failed, id missing` });
      else{
        let findData = await PortfolioData.findByPk(keywords.id);
        if (!findData) return res.status(404).json({ status: false, message: `failed, data no found` });
        await findData.destroy();
        return res.status(200).json({ status: true, message: `success, data deleted` });
  
      }
      
    } catch (err) {
      return res.status(400).json({ status: false, error: err });
    }
  };

module.exports = {
  portfolioGet,
  portfolioPost,
  portfolioUpdate,
  portfolioDelete,
  portfolioValuesGet,
  portfolioValuesPost,
  portfolioValuesUpdate,
  portfolioValuesDelete
};
