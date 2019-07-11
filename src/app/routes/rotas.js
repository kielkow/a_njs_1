module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.send(
            `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <h1>Caso do Código</h1>
            </body>
            </html>
            `
        )
    })

    app.get('/lista', function (req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'), {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos Nodejs'
                    },
                    {
                        id: 2,
                        titulo: 'Nodejs Avançado'
                    }
                ]
            }
        )
    }
    )
}
