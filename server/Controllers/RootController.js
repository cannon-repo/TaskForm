const Info = require("../Models/InfoSchema");

module.exports.postSubmit = async (req,res) => {
    const {Name, Email, MobNum, Date} = req.body;
    try {
        await Info.create({Name,Email,MobNum,Date});
        res.status(200).json({Message: 'Submitted Successfully', Success: true})
    } catch(err) {
        res.status(400).json({Message: 'Failed', Success: false, Error: err});
    }
}