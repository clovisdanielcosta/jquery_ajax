function consultaCep() {
    
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; 
    
    $.ajax ({
        url: url,
        type: "GET",
        success: function name(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("cep2").innerHTML = response.cep;
        }
    })
}