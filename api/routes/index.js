const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    app.get('api/vi/wallet' , (req,res) => res.send(wallet.js)}
