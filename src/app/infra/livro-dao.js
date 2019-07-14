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

    atualiza(livro) {
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
                    livro.id
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

                    return resolve()
                }
            )
        })
    }

    busca(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [
                    id
                ],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
    }

}

module.exports = LivroDao