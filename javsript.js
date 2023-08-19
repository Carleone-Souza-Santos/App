let GastosMês=[] // cesta de compras

let btn=document.querySelector('input[type=submit]')//function ad botão para executar função.
.addEventListener('click',(e)=>{
  
    let Nom_Empresa=document.querySelector('input[name=Nom_Empresa]')  // entrada nome da empres.
    let Gasto=document.querySelector('input[name=Gasto]')              // entrada valor Gasto.
    let Recebe=document.querySelector('input[name=quant_recebe]')      // entrada do dinheiro d mês.
    let Recebiment=Recebe.value;                                       // pegando o valor que recebe no mês para expor na tela.


    
GastosMês.push({ //adicionando objeto dentro do array cestacompra 
    Nom_Conta: Nom_Empresa.value,      // entregando novo nome.
    Valor_Conta: Gasto.value,          // entregando valor.
    
});

//alert(cestaCompra[0].Name)verificação da ocorrrencia dentro do array.
let box = document.querySelector('.conteiner-box'); //recolhendo a classe estilizada com css. 
box.innerHTML=""; //limpando a pag.

let soma=0; // elemento criado com intuito de somar os valores aplicados

GastosMês.map(function(pegar){//pegando o array com a função paramentro pegar a classe criada com css e distribuindo na tela. 
    soma+=parseFloat(pegar.Valor_Conta);
    

    box.innerHTML+=`
     <div class="box-list">
    <h3 ><img src="correr.png" >`+ pegar. Nom_Conta +`</h3>
    <div class="list">
    <span> R$ `+ pegar.Valor_Conta +`</span>
   
    </div>
    </div>
    `;


Nom_Empresa.value=""; //limpar o input
Gasto.value ="";      //limpar o input


//alert(soma)//test soma
//soma = soma.toFixed(2); //limitando as casas decimais.

let total =document.querySelector('.Box-Price');  //saida do valor gasto .
let rec_dinheir =document.querySelector('.Price');//saida do valor que recebeu no mÊs. 


let menos = Recebiment - soma; 


rec_dinheir.innerHTML=`${Recebiment} Carteira `;
total.innerHTML=`Gastos R$ ${soma.toFixed(2)}
</br> `+`
O que Restar! ${menos}
`;//apresenta na tela o total que soma está recebendo


});

});