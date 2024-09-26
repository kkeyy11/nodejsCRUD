const db = require('../config/db');
const information = {
    save:(data, callback) =>{
        const query ="insert into information (lastname, firstname) values (?,?)";
        db.query(query,  [data.lastname, data.firstname], callback);
    }

};
module.exports = information;