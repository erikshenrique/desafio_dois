window.onload = function() {

    function resultadoCep(dadosCep) {

        for(let campo in dadosCep) {
 
             if(document.querySelector(`#${campo}`)) {
                 document.querySelector(`#${campo}`).value= dadosCep[campo];
             }
 
        }    
 
 
     }

    let dadosCep = async function(cep) {

        let url = `https://viacep.com.br/ws/${cep}/json/`;

        try { 

            let dadosFetch = await fetch(url);        
            let dadosJson = await dadosFetch.json();
            resultadoCep(dadosJson);

        } catch(error){

           alert(error);

        }

    }

    const cep = document.querySelector("#cep");
    const btnEnviar = document.querySelector("#enviarDados");

    btnEnviar.addEventListener('click', function() {

        dadosCep(cep.value);

    });

}