const {Router} = require('express');

const {
    getPedidosDetalle
} = require('../controllers/pedidos');

const router = Router();

router.get('/allpedidos', getPedidosDetalle);

module.exports = router;