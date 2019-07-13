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

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                INSERT INTO LIVROS(
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function (err){
                    if (err) {
                        console.log(err)
                        return reject('Nao foi possivel cadastrar livro')
                    }

                    resolve()
                }
            )
        })
    }
}

module.exports = LivroDao