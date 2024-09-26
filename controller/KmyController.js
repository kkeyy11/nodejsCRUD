const info = require('../models/UserInformation');


const ymk = {
    index:(req, res)=>{
        res.render('index');

    },
    save:(req, res)=>{
        const data = req.body;
        info.save(data, (err)=>{
            if (err) throw err;
            res.redirect('./');
        })
       
    }

};

module.exports = ymk;