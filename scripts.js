function checkStatus()
{
    event.preventDefault();
    switch(status_compra.value){
        case "pago":
            document.getElementById("resultado").innerHTML = "Pedido pago";
        break;
        case "recusado":
            document.getElementById("resultado").innerHTML = "Pedido recusado";
        break;
        case "pendente":
            document.getElementById("resultado").innerHTML = "Pedido pendente";
        break;
        case "disputa":
            document.getElementById("resultado").innerHTML = "Pedido disputa";
        break;
        default:
            document.getElementById("resultado").innerHTML = "Ocorreu um erro";
    }
}

function checkIdade()
{
    event.preventDefault();

    let resultado = document.getElementById("resultado");
    let idd = Number(idade.value);

    // idd < 10 ? resultado.innerHTML = "É criança" : resultado.innerHTML = "Não é criança";
    idd < 10 && (document.getElementById("imagem").src = "https://eyekids.med.br/wp-content/uploads/2020/02/como-convencer-a-crianca-usar-oculos.jpg");
    // (idd >= 10 && idd < 18) && (resultado.innerHTML = "É Juvenil");
    (idd >= 10 && idd < 18) && (document.getElementById("imagem").src = "https://dtpr0iglcwflm.cloudfront.net/profissoes/wp-content/uploads/2019/08/7-passos-para-fazer-curriculo-de-jovem-aprendiz-scaled-1600x900.jpg")
    // (idd >= 18 && idd < 60) && (resultado.innerHTML = "É Adulto");
    idd >= 18 && idd < 60 && (document.getElementById("imagem").src = "https://static.wixstatic.com/media/06b15b_e267b692f39a4cd482cb91637d64ead1~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06b15b_e267b692f39a4cd482cb91637d64ead1~mv2.jpg")
    // idd > 60 && (resultado.innerHTML = "É Idoso");
    idd > 60 && (document.getElementById("imagem").src = "https://conteudo.imguol.com.br/c/entretenimento/0c/2022/01/03/idoso-com-problema-de-audicao-surdez-ouvido-surdo-1641234303224_v2_4x3.jpg")

}
