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
                function (err) {
                    if (err) {
                        console.log(err)
                        return reject('Nao foi possivel cadastrar livro')
                    }

                    resolve()
                }
            )
        })
    }

    atualiza(livro, id) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                UPDATE LIVROS
                SET titulo = ?, preco = ?, descricao = ?
                WHERE id = ?
                `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao,
                    id
                ],
                function (err) {
                    if (err) {
                        console.log(err)
                        return reject('Nao foi possivel atualizar o lirvo')
                    }

                    resolve()
                }
            )
        })
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `
                DELETE FROM LIVROS 
                WHERE id = ?
                `,
                [
                    id
                ],
                function (err) {
                    if (err) {
                        console.log(err)
                        return reject('Nao foi possivel remover livro')
                    }

                    resolve()
                }
            )
        })
    }

    busca(id) {
        return new Promisse((resolve, reject) => {
            this._db.run(
                `
                SELECT * FROM LIVROS
                WHERE id = ?
                `,
                [
                    id
                ],
                function (err) {
                    if (err) {
                        console.log(err)
                        return reject('Nao foi possivel encontrar o livro')
                    }

                    resolve()
                }
            )
        })
    }
}

module.exports = LivroDao