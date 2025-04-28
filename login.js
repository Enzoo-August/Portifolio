nome = prompt("Digite seu usuario: ")
senha = prompt("Digite sua senha: ")
if (nome == "Enzo" && senha =="12"){
    alert(`Seja bem vindo ${nome}`)
    window.location.href = "index.html"
}
else
{
    alert("Usario ou senha incorretos")
}