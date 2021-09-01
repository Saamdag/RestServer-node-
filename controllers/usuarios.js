const {response} = require('express')


const usuariosGet = (req = request, res = response) => {
    const {q,nombre='No name',apikey} = req.query;

    res.json({
        ok:true,
        msg:'get api-controlador',
        q,nombre,apikey
    })
};

const usuariosPut = (req, res= response) => {
    const id = req.params.id;
    res.json({
        ok:true,
        msg:'put api*controler',
        id
    });
}
const usuariosPost = (req, res= response) => {

    const {nombre,edad} = req.body;

    res.json({
        ok:true,
        msg:'post api*controler',
        nombre,
        edad
    });
}
const usuariosDelete = (req, res= response) => {
    res.json({
        ok:true,
        msg:'Delete api*controler'
    });
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}