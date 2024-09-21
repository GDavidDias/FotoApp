const pool = require('../../database/connection.js');

module.exports = async(req,res)=>{
    //TRAE detalle de fotos con codigo pedido
    const{codPedido}=req.body;
    console.log('que viene en codPedido: ', codPedido);

    try{
        const [result] = await pool.query(`SELECT dp.codigo_pedido, dp.item, dp.codigo_foto, dp.tam1, dp.tam2, dp.tam3, dp.tam4, dp.tam5, dp.tam6, dp.fotoiman
            FROM detalle_pedido AS dp
            WHERE dp.codigo_pedido = ${codPedido}
            `);

        console.log('que trae result getPedidoDetalle: ', result);

        res.status(200).json(result);
        
    }catch(error){
        res.status(400).send(error.message);
    }

};