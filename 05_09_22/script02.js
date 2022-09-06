function pegarItem(item, valor) {

// if( item == "arroz"){     // (==) igual
//     console.log(item);
//}

if ((item == "feijão") || (item == "ovo")) {               // (!=) difernte
console.log(item + " valor: " + valor);         // (||): "pipe" = "ou"

}

//alert("peguei o item : " + item)
//console.log(item);
}

$('#btCalcular').click(
    function () {
        produtos =
            [
                { "nome": "arroz", "valor": 10 },
                { "nome": "arroz", "valor": 12 },
                { "nome": "feijão", "valor": 10 },
                { "nome": "ovo", "valor": 1 }
            ]

        for (i = 0; i<= produtos.length - 1; i++) {
            pegarItem(produtos[i].nome, produtos[i].valor);
        }

        // turma =
        //     [
        //         { "nome": "willian", "idade": 18 },
        //         { "nome": "Gabriel", "idade": 20 },
        //         { "nome": "jean", "idade": 29 },
        //         { "nome": "Samoel", "idade": 23 },
        //         { "nome": "Diego", "idade": 19 },
        //         { "nome": "adam", "idade": 21 }

        //     ];
        // console.log(turma[3].nome);     //Samoel
        // console.log(turma[0].idade);   //18
        // console.log(turma[5].idade);   //21
        // console.log(turma[4].nome);    //Diego
        // console.log(turma[2].nome);    //Jean




        // aluno = {"nome":"willian", "idade":18};
        // aluno2 = {"nome":"matheus", "idade":19};

        // console.log(aluno.idade)

        //         listaCompras = ["arroz", "arroz", "feijão", "ovo"]
        //         valorProduto = [10, 12, 10, 1]

        //         for (i = 0; i <= 3; i++) {
        //             // alert ("alo!"+listaCompras[i]);
        //             pegarItem(listaCompras[i], valorProduto[i]);
    }


);