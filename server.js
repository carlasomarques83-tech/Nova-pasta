//Importar o express
    const express = require("express")

// executar o express
    const app = express()

//Definir a PORTA
    const PORT = 3000


// ROTA PRINCIPAL
    app.get("/", (req,res)=>{
    res.send("Olá Mundo!")

})


// ROTA PARA PRODUTOS
    app.get("/produtos", (req,res)=>{
    res.send("Aqui vão os produtos")

})



// ROTA COM HTML
    app.get("/pagina", (req,res)=>{
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Minha Página</title>
    </head>
    <body>
    <h1>Bem-vindo!</h1>
    <p>Esta página foi gerada pelo Express.</p>
    </body>
    </html>
    `;
    res.send(html)

})






// ROTA COM JSON

// SEND - ENVIA TXT E HTML

//JSON envia em formato JSON
    app.get("/json", (req,res)=>{
    const resposta = {

    statusCode: 200,
    mensagem: "Dados em JSON"
 }
    res.json(resposta)

})


// ROTA POST PARA CRIAR
    app.post("/api/users", (req,res)=>{
    res.status(201).json({mensagem: "Utilizador foi criado com sucesso!"})

})


app.listen(PORT, ()=>{
console.log(`O servidor está rolando na porta ${PORT}`)

})