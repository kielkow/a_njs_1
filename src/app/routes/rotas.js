module.exports = (app) =>{
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
                <h1>Listagem de Livros</h1>
            </body>
            </html>
            `
        )
    }
    )
}