class LivroDao {

    constructor(db) {
        this._db = db
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Nao foi possível listar os livros!')

                    return resolve(resultados)
                }
            )
        })
    }

    adiciona(){
        return new Promise((resolve, reject) => {
            this._db.all(
                ''
            )
        })
    }
}

module.exports = LivroDao