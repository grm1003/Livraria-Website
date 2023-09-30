document.getElementById("oi").addEventListener('click', (e)=>{
    e.preventDefault;
    validate();
})
function validate(){
    alert("entrei")
    
    var titulo = document.getElementById('titulo').value;
    var date = document.getElementById('date').value;
    var price = document.getElementById('price').value;
    var sinopse = document.getElementById('sinopse').value;

    var mensagem = "";
    if(titulo == '') {
        mensagem += " Campo Titulo não pode ser nulo " ;
    }
    if(date == '') {
        mensagem += " Campo Data Lançamento não pode ser nulo " ;
    }
    if(price == '') {
        mensagem += " Campo Preço não pode ser nulo " ;
    }

    if(sinopse == '') {
        mensagem += " Campo Sinopse não pode ser nulo " ;
    }
    

    if(titulo == '' || date == '' || price == '' || sinopse == '') {
        appendAlert(mensagem);
        return;

    }else{
        submit();
    }
}

function appendAlert(message) {
    var alert = document.getElementById("liveAlert");
    if (!alert.hasChildNodes()) {
        const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-warning alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '</div>'
      ].join('')
    
      alert.append(wrapper)
    }
}
