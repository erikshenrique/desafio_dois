function calcular( idProduto, resultado) {

    const preco          = document.querySelectorAll(`#${idProduto} > li`);
    const valorResultado = document.querySelector(`#${resultado}`);
    let total = 0;


    for( let i of preco ){
       total += Number(i.dataset.preco);
    }

    valorResultado.value = 'R$ ' + total;

}


function verificarItens(idProduto, fruta, preco) {

    const lista_cliente  = document.querySelectorAll(`#${idProduto} > li`);
    const lista_cesta = document.querySelector("#cestaDoCliente");
    let inserir = false;

    if(lista_cliente.length == 0) {

        let li = document.createElement('li');
        lista_cesta.appendChild(li).setAttribute( 'data-preco', preco);
        lista_cesta.appendChild(li).textContent =  fruta;
        calcular('cestaDoCliente','mostraTotalCompra');

    }

    if(lista_cliente.length <= 4) {

        inserir = false;

        for(let produto of lista_cliente) {

            if(produto.innerHTML == fruta) {
    
                alert(`Este item ${fruta} já está na sua cesta`);
    
                inserir = false;
    
            } else {
    
                inserir = true;
    
            }
    
        }

    } else {

        alert(`Este item ${fruta} já está na sua cesta`);

        inserir = false;

    }

    if(inserir == true) {

        let li = document.createElement('li');
        lista_cesta.appendChild(li).setAttribute( 'data-preco', preco);
        lista_cesta.appendChild(li).textContent =  fruta;
        calcular('cestaDoCliente','mostraTotalCompra');

    }

}

function adicionarProduto(idProduto) {

    const lista = document.querySelectorAll(`#${idProduto} > li`);

    for(let produto of lista) {
        produto.addEventListener('click',function() {

            verificarItens('cestaDoCliente', produto.innerHTML, produto.dataset.preco);
            
        });
    }

}

export {adicionarProduto};