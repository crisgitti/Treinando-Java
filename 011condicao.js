function calclular() {
    var vel = document.getElementById('vel')
    var res =document.getElementById('res')
    var velo = Number(vel.value)
    res.innerHTML = `<p>Sua Velocidade é de <strong>${velo}</strong> km/hr</p>`
    
if (velo > 60){
    res.innerHTML +=("<p>Se prepare para pagar multa</p>")
    }
else{res.innerHTML +=("<p>Sem Multa!<strong>PARABÉNS!</strong></p>")    
}
res.innerHTML +=("<p>Dirija com segurança sempre!</p>")
}   