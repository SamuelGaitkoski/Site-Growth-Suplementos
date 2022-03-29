
const listaProdutos = [
    produto = {
        idproduto: 1,
        nome_produto: "Whey Protein Concentrado",
        descricao_produto: "Quantidade: 1Kg",
        valor_produto: 88.20,
        foto_produto: "img/whey-concentrado.png"
    },
    produto = {
        idproduto: 2,
        nome_produto: "Creatina Monohidratada",
        descricao_produto: "Quantidade: 250g",
        valor_produto: 69.30,
        foto_produto: "img/creatina-monohidratada.jpg"
    },
    produto = {
        idproduto: 3,
        nome_produto: "Multivitamínico",
        descricao_produto: "Quantidade: 120 cápsulas",
        valor_produto: 35.10,
        foto_produto: "img/multivitaminico.jpg"
    },
    produto = {
        idproduto: 4,
        nome_produto: "Pasta de Amendoim Integral",
        descricao_produto: "Quantidade: 1Kg",
        valor_produto: 21.60,
        foto_produto: "img/pasta-de-amendoim-torrado.png"
    },
    produto = {
        idproduto: 5,
        nome_produto: "Whey Protein Isolado",
        descricao_produto: "Quantidade: 1Kg",
        valor_produto: 144.00,
        foto_produto: "img/whey-isolado.png"
    },
    produto = {
        idproduto: 6,
        nome_produto: "Barra de proteína",
        descricao_produto: "Quantidade: 30g",
        valor_produto: 2.34,
        foto_produto: "img/barra-proteina.png"
    },
    produto = {
        idproduto: 7,
        nome_produto: "Coqueteleira Preta",
        descricao_produto: "Capacidade: 600ml",
        valor_produto: 4.95,
        foto_produto: "img/coqueteleira.png"
    },
    produto = {
        idproduto: 8,
        nome_produto: "BCAA em pó (2:1:1)",
        descricao_produto: "Quantidade: 200g",
        valor_produto: 42.30,
        foto_produto: "img/bcaa.jpg"
    },
    produto = {
        idproduto: 9,
        nome_produto: "Albumina",
        descricao_produto: "Quantidade: 500g",
        valor_produto: 38.70,
        foto_produto: "img/albumina.jpg"
    },
    produto = {
        idproduto: 10,
        nome_produto: "Creatina Creapure",
        descricao_produto: "Quantidade: 100g",
        valor_produto: 45.00,
        foto_produto: "img/creatina-100g.png"
    },
    produto = {
        idproduto: 11,
        nome_produto: "Gengibre em pó",
        descricao_produto: "Quantidade: 250g",
        valor_produto: 21.60,
        foto_produto: "img/gengibre-em-po.jpg"
    }
];

const blocoProdutos = document.querySelector('#bloco-produtos');
let rowProduto;
let colProduto;
let contador = 0;

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length || contador < 4; i++) {
        if (i == 0 || contador == 0) { 
            rowProduto = criarDivLinha();
            colProduto = criarDivProduto(i); 

            rowProduto.appendChild(colProduto); 

            blocoProdutos.appendChild(rowProduto); 
        } else { 
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
        }

        contador++; 

        if (contador == 4 && listaProdutos[i + 1] != null) {
            contador = 0; 
        }
    }

} else {
    blocoProdutos.innerHTML = "Não há produtos cadastrados";
}

function criarDivLinha() {

    const rowProdutoTemp = document.createElement("div"); 
    rowProdutoTemp.classList.add('row'); 
    return rowProdutoTemp; 
}

function criarDivProduto(i) {
    const colProdutoTemp = document.createElement("div"); 
    colProdutoTemp.classList.add("col"); 

    if (listaProdutos[i] == null) {
        return colProdutoTemp;
    }

    const divProduto = document.createElement('div');
    divProduto.classList.add('produto'); 

    divProduto.setAttribute(
        'onmouseover', 'mudarCorBotao(btnComprar' + listaProdutos[i].idproduto + ')'
    );

    divProduto.setAttribute(
        'onmouseout', 'voltarCorBotao(btnComprar' + listaProdutos[i].idproduto + ')'
    );

    const divFotoProduto = document.createElement('div');
    divFotoProduto.classList.add('foto-produto');
    divProduto.appendChild(divFotoProduto);
    const tagImg = document.createElement('img');
    tagImg.setAttribute('src', listaProdutos[i].foto_produto);
    tagImg.setAttribute('alt', listaProdutos[i].nome_produto); 
    divFotoProduto.appendChild(tagImg); 

    const divNomeProduto = document.createElement('div');
    divNomeProduto.classList.add('nome-produto'); 
    divNomeProduto.innerHTML = listaProdutos[i].nome_produto;
    divProduto.appendChild(divNomeProduto); 

    const divDescricaoProduto = document.createElement('div');
    divDescricaoProduto.classList.add('descricao-produto');
    divDescricaoProduto.innerHTML = listaProdutos[i].descricao_produto;
    divProduto.appendChild(divDescricaoProduto); 

    const divValorProduto = document.createElement('div');
    divValorProduto.classList.add('preco-produto');
    let valorAjustado = ajustarCasasDecimais(listaProdutos[i].valor_produto);
    divValorProduto.innerHTML = `R$ ${valorAjustado}`;
    divProduto.appendChild(divValorProduto); 

    const divBtnComprar = document.createElement('div');
    divBtnComprar.classList.add('btn');
    divBtnComprar.classList.add('btn-outline-light');
    divBtnComprar.setAttribute('id','btnComprar' + listaProdutos[i].idproduto);
    divBtnComprar.innerHTML = "COMPRAR";
    divProduto.appendChild(divBtnComprar);

    colProdutoTemp.appendChild(divProduto);
    return colProdutoTemp;
}

function ajustarCasasDecimais(valor) {
    let valorAjustado = valor.toFixed(2); 
    valorAjustado = valorAjustado.replace('.', ',');
    return valorAjustado; 
}

function mudarCorBotao(btnComprar) {
    btnComprar.classList.replace('btn-outline-light', 'btn-hover');
}

function voltarCorBotao(btnComprar) {
    btnComprar.classList.replace('btn-hover', 'btn-outline-light');
}