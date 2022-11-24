const baseDeDados = {
    "resultado": [{
        "genero": "masculino",
        "nome": {
            "titulo": "sr",
            "primeiro": "David",
            "utlimo": "Fernando"
        },
        "localizacao": {
            "rua": " Augusta , 238",
            "cidade": "São Paulo",
            "Estado": "São Paulo",
            "postcode": "01305000",
            "coordenadas": {
                "latitude": "-23.5569581",
                "longitude": "-46.6589677"
            },
            "timezone": {
                "offset": "-3:00",
                "descricao": "Brasil"
            }
        },
        "email": "david.fernando@exemplo.com",
        "login": {
            "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
            "usuario": "silverswan131",
            "senha": "firewall",
            "salt": "TQA1Gz7x",
            "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
            "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
            "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
            "data": "1993-07-20T09:44:18.674Z",
            "idade": 26
        },
        "registro": {
            "data": "2002-05-21T10:59:49.966Z",
            "idade": 17
        },
        "fone": "011-4039-8745",
        "celular": "011-99874-5621",
        "id": {
            "nome": "PPS",
            "valor": "0390511T"
        },
        "imagem": {
            "grande": "https://randomuser.me/api/portraits/men/75.jpg",
            "media": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "miniatura": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
    }],
    "info": {
        "seed": "fea8be3e64777240",
        "resultado": 1,
        "pagina": 1,
        "versao": "1.3"
    }
};

// LINK RANDOMICO DO USUARIO -> https://randomuser.me/api/



// let consultandoBaseDeDados = new Promise((resolve, reject) => {
//     // Aqui temos uma solicitação simulada para um banco de dados, com um atraso de 2 segundos.
//     //A lógica interna estará  no servidor e nós apenas esperaríamos por uma resposta.
//     setTimeout(function () {
//         if (baseDeDados == null) {
//             reject({
//                 "mensagem": "Base de dados inexistente."
//             });
//         } else {
//             resolve(baseDeDados);
//         }
//     }, 1000);

// });

fetch('https://randomuser.me/api/')
.then(response => {
    return response.json()
})
.then(data => {
    //manipulamos a resposta
    // console.log(data)
    renderizarDadosUsuario(data)
});


// Aqui realizamos uma consulta da promessa, aguardando sua resposta assíncrona
// consultandoBaseDeDados
//     .then((resposta) => {

//         const dados = {
//             img: resposta.resultado[0].imagem.grande,
//             nomeCompleto: `${resposta.resultado[0].nome.primeiro} ${resposta.resultado[0].nome.utlimo}`,
//             email: resposta.resultado[0].email
//         }

//         renderizarDadosUsuario(dados)
//     }).then(
//     ).catch((err) => {
//         console.log(err);
//     });

function renderizarDadosUsuario(data) {
    /* -------------------------------- TAREFAS -------------------------------- */
    // Aqui  devem desenvolver uma função que é exibida na tela:
    // a foto, o nome completo do usuário e seu e-mail.
    //  Isso deve ser baseado nas informações que chegam até nós e  são inseridas no HTML.
    //  Dica: você pode manipular o CSS e estruturar o card ao seu gosto.

    let cards = document.getElementById("tarjeta");
    
    let card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width:100%")
    cards.appendChild(card)

    let img = document.createElement("img")
    img.classList.add("card-img-top")
    img.src = `${data.results[0].picture.large}`
    card.appendChild(img)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    let nomeLabel = document.createElement("label")
    nomeLabel.innerText = "Nome completo:"
    cardBody.appendChild(nomeLabel)

    const cardNome = document.createElement("h5")
    cardNome.classList.add("card-title")
    const textTitle = document.createTextNode(`${data.results[0].name.first} ${data.results[0].name.last}`);
    cardNome.appendChild(textTitle);
    cardBody.appendChild(cardNome)

    let emailLabel = document.createElement("label")
    emailLabel.innerText = "Email:"
    cardBody.appendChild(emailLabel)

    const cardEmail = document.createElement("h5")
    cardEmail.classList.add("card-title")
    const textEmail = document.createTextNode(`${data.results[0].email}`);
    cardEmail.appendChild(textEmail);
    cardBody.appendChild(cardEmail)
}

let atualizar = document.getElementById("atualizaPg").addEventListener("click", function(event){
  event.preventDefault()

  window.location.reload();
});
   


