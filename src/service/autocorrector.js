const Spellchecker = require("../lib/Spellcheker.js")

const AutocorrectorService = (request,response) => {
    const palabra_recibida = request.body.palabra_recibida
    if(palabra_recibida != ""){
    console.log(palabra_recibida.trim().split(" "))
    const listpalabra = palabra_recibida.trim().split(" ")
    const respuestalista = []
    listpalabra.forEach(element => {

//se esta iterando y guardando la palabra que pasara por el proceso dle spellchecker

        const resultado = Spellchecker(element)
        respuestalista.push(resultado)
    });

    response.status(200).json({
        prueba: "esta es una api de prueba",
        word: respuestalista.join(" ")
    })
}
    response.status(200).json({
        prueba: "esta es una api de prueba",
        word: null
    })
}


module.exports = AutocorrectorService