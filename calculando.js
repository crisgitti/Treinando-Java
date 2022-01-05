window.onload=function(){
    var num1=document.getElementById("num1")
    var num1=document.getElementById("num2")
    var res=document.getElementById("res")
    document.getElementById("adicao").onclick= function(){
    var res1= Number(num1.value) + Number(num2.value)
    res.innerHTML = ("O valor calculado é  " + res) 
    }
    document.getElementById("subtracao").onclick= function(){
    var res= Number(num1.value) - Number(num2.value)
    res.innerHTML = ("O valor calculado é  " + res) 
    }
    document.getElementById("multiplicacao").onclick= function(){
    var res= Number(num1.value)  * Number(num2.value)
    res.innerHTML = ("O valor calculado é  " + res) 
    }
    document.getElementById("divisao").onclick= function(){
    var res= Number(num1.value) / Number(num2.value)
    res.innerHTML = ("O valor calculado é  " + res) 
    }
}
