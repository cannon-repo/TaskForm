
module.exports.postSubmit = async (req,res) => {
    const {Name, Email, MobNum, Date} = req.body;
    try {
    } catch(err) {
        res.status(400).json({Message: 'Failed', Success: false, Error: err});
    }
}