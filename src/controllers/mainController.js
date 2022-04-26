const res = require('express/lib/response');
const platos_db = require('../data/platos_db')

/**metodo FIND ENCONTRAME EL PLATO CON EL ID QUE COINCIDA CON EL DEL PARAMETRO QUE LE ESTOY PASANDO Y MANDAME SUS DATOS */
/* res.render, me renderiza en la vista index . como segundo paramtro le paso un objeto , platos: platos_db*/
module.exports = {
    index : (req,res) => {
        return res.render('index',{
            platos : platos_db
        })
    },
    detail : (req,res) => {

        let plato = platos_db.find(plato => plato.id === +req.params.id);
      
        return res.render('detalleMenu',{
            plato,
        })
    }
        
}