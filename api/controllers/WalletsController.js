const database = require("./models")

class WalletsController {
    static async pegaTodasAsWallets(req,res){
        try {
            const todasAsWallets = await database.Wallet.findAll()
        return (res).status(201).json(todasAsWallets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    } 
    static async listaUmaCarteira(req,res){
        const listaUmaCarteira = req.body
        try{
            const listaUmaCarteiraCriada = await.database.wallets.coin.transaction.create(listaUmaCarteira)
            return res.status(200).json(error.message)
        } catch (error) {
        return res.status(404).json(error.message)
    }
} 
static async listaCarteira(req,res){
    const listaCarteira = req.body
    try{
        const listaCarteiraCriada = await.database.wallets.create(listaUmaCarteira)
        return res.status(200).json(error.message)
    } catch (error) {
    return res.status(201).json(error.message)
}
}




module.exports = WalletsController