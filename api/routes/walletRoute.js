const { router } = require('express')
const { pegaTodasAsWallets, listaUmaCarteira, listaCarteira } = require('../controllers/walletsController')
const WalletsController = require('../controllers/walletsController')

const router = router()

router.get('localhost:3000/api/v1/wallet', walletsController, pegaTodasAsWallets)
router.get('localhost:3000/api/v1/wallet',walletsController, listaUmaCarteira)
router.post('localhost:3000/api/v1/wallet', walletsController, listaCarteira)

module.exports = router