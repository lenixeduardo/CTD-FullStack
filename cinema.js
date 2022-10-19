const catalogo = require('./database/catalogo.json')


// console.log(catalogo)
// catalogo.map((filme) => {
//     return filme.titulo
// })


// console.log(catalogo.filter((filme) => filme.emCartaz == true))



// console.log(catalogo.reduce((acumulador,item) => {
//     return acumulador + item.duracao
// }, 0))


// catalogo.forEach((filme) => {
//     console.log(filme.titulo)
// })



// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)


const listarTodosOsFilmesEmCartaz = () => {
    catalogo.forEach((filme) => console.log(``))
}
// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo

const buscarFilme = (codigo) => catalogo.find((filme) =>  filme.codigo == codigo)
// alterar o status de emCartaz (true -> false e se tiver false -> true) 
// (alterarStatusEmCartaz) -> parametro: codigo
const alterarStatusEmCartaz = (codigo, callback) => {
    const filme = callback(codigo)

    if (!filme) {
        console.log("Filme não encontrado")

        return null
    }

    filme.emCartaz == true ? filme.emCartaz = false: filme.emCartaz = true

    return filme
}


// console.log(alterarStatusEmCartaz(2, buscarFilme))


// adicionar um novo filme no nosso catalogo (adicionarFilme) => parametro : filme :{ codigo, titulo, atores, duracao, anoDeLancamento}
const adicionarFilme = (filme) => {

//     const { codigo, titulo, atores, duracao, anoDeLancamento} = filme;

// catalogo.push({
//     codigo,
//     titulo,
//     atores,
//     duracao,
//     anoDeLancamento,
//     emCartaz : true
// })

// if (!duracao) = {
//     console.log("Não é possivel adicionar um filme sem duração");
//     return
// }

const filmeParaAdicionar = {

    ...filme,

    emCartaz: true
}

catalogo.push(filmeParaAdicionar)

return filmeParaAdicionar;
}

console.log(
    adicionarFilme({
        codigo: 6,
        titulo: "O poderoso Chefão",
        duracao: 1.5,
        atores: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        anoDeLancamento: 2001,
        
    })
)

// listar os filmes com maior duracao do que 2h 


function listarFilmescomLongaDuracao() {
    
}