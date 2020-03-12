function consultaCep() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"; 
    
    $.ajax ({
        url: url,
        type: "GET",
        success: function name(response) {
            console.log(response);
            $("#titulo_cep").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#localidade").html(response.localidade);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $(".cep").show();
            $(".barra-progresso").hide();

            /*  Outra forma sem JQuery
                document.getElementById("logradouro").innerHTML = response.logradouro;
            */
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
