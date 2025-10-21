function validarLogin(event) {
    event.preventDefault()

    const usuarioValido = "admin"
    const senhaValida = "123456"

   const usuarioInput = document.getElementById("usuario")
   const senhaInput = document.getElementById("password")
   const mensagemErro = document.getElementById("mensagem-erro")
   mensagemErro.textContent = ""

   const usuario = usuarioInput.value
   const senha = senhaInput.value

   if(usuario===usuarioValido && senha===senhaValida) {
     alert("Login realizado com sucesso! Redirecionando...")
     window.location.href='agendamento.html'
   } else{
    mensagemErro.textContent = "Usuário ou senha inválidos"
    usuarioInput.focus()
    usuarioInput.value = ""
    senhaInput.value = ""

   }

   
}

function botaodeenvio(event) {
    //Evitar o envio padrão do formulário
    event.preventDefault()

    //Coletar os dados do formulário
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const idade = document.getElementById("idade").value
    const dataconsul = document.getElementById("dataconsul").value
    const hora = document.getElementById("hora").value
    const especialidade = document.getElementById("especialidade").value
    const conveniado = document.querySelector("input[name='conveniado']:checked")?.value
    const servicoSelecionados = document.querySelectorAll("input[name='servico']:checked")
    const servico = Array.from(servicoSelecionados).map(x => x.value)
    const sintomas = document.getElementById("sintomas").value
    const medico = document.getElementById("medico").value


    //Criar o meu objeto
    const usuario = {
        nome,
        email,
        telefone,
        idade,
        dataconsul,
        hora,
        especialidade,
        conveniado,
        servico,
        sintomas,
        medico
    }

    //Armazenar em LocalStorage os dados do Cadastro
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
    alert("Consulta agendada com sucesso!")
    console.log(usuario);


      
}
