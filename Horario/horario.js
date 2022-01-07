function (carregar) {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}`
}