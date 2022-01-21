   
   var envio = document.getElementById("envio")
   var contato = document.getElementById("contato")

   function valida()
   {
        var nome= document.getElementById("nome")
        var tel=document.getElementById("tel")
        var curso=document.getElementById("curso")
        
        if (nome.value ==="" )
        {
            alert("Campo Obrigatório!")    
        } else if(tel.value="")
        {
            alert("Campo Obrigatório!")  
        } else if(curso.value == 0)
        {
            alert("Selecione um Curso")  
        }
        else{
            alert("Sucesso!")
            envio.value ="Concluido"
            envio.disabled = true
            envio style.background = "red"
            alert("Pronto")
        }
        envio.onclick=function()
        {
            valida()
        }
   }