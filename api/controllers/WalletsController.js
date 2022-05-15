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
}

module.exports = WalletsController