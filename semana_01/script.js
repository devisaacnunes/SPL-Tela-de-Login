const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const showRegister = document.getElementById("show-register");
const showLogin = document.getElementById("show-login");

showRegister.addEventListener("click", function(e){
    e.preventDefault();

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

showLogin.addEventListener("click", function(e){
    e.preventDefault();

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// pegar elementos
const form = document.getElementById("login-form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erro = document.getElementById("erro");

form.addEventListener("submit", function(event){

    // impedir recarregar página
    event.preventDefault();

    const emailDigitado = email.value;
    const senhaDigitada = senha.value;

    // limpar erro anterior
    erro.textContent = "";

    //  validação de email (HTML já ajuda)
    if(!email.checkValidity()){
        erro.textContent = "Formato de e-mail inválido.";
        return;
    }

    // verificar credenciais
    if(emailDigitado === "test@mail.com" && senhaDigitada === "senha"){

        alert("Em breve o dashboard será disponibilizado.");

    } else {

        erro.textContent =
        "Usuário ou senha inválido. Caso não seja cadastrado, crie uma conta!";
    }

});

// cadastro
const register = document.getElementById("register-form");

register.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const emailCad = document.getElementById("emailCad");
    const senhaCad = document.getElementById("senhaCad");
    const confirmar = document.getElementById("confirmar");

    const erroNome = document.getElementById("erro-nome");
    const erroCpf = document.getElementById("erro-cpf");
    const erroTel = document.getElementById("erro-telefone");
    const erroEmail = document.getElementById("erro-email");
    const erroSenha = document.getElementById("erro-senha");
    const erroConfirmar = document.getElementById("erro-confirmar");

    document.querySelectorAll(".erro").forEach(e => e.textContent = "");
    document.querySelectorAll("input").forEach(i => i.classList.remove("input-erro"));

    let valido = true;

    //regras para criação

    if(nome.value.trim().length < 3){
        erroNome.textContent = "Nome inválido";
        nome.classList.add("input-erro");
        valido = false;
    }

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if(!cpfRegex.test(cpf.value)){
        erroCpf.textContent = "CPF inválido";
        cpf.classList.add("input-erro");
        valido = false;
    }

    const telRegex = /^\(\d{2}\)\d{5}\-\d{4}$/;
    if(!telRegex.test(telefone.value)){
        erroTel.textContent = "Telefone inválido";
        telefone.classList.add("input-erro");
        valido = false;
    }

    if(!emailCad.checkValidity()){
        erroEmail.textContent = "E-mail inválido";
        emailCad.classList.add("input-erro");
        valido = false;
    }

    if(senhaCad.value.length < 6){
        erroSenha.textContent = "Senha deve ter no mínimo 6 caracteres";
        senhaCad.classList.add("input-erro");
        valido = false;
    }

    if(senhaCad.value !== confirmar.value){
        erroConfirmar.textContent = "Senhas não coincidem";
        confirmar.classList.add("input-erro");
        valido = false;
    }

    //caminho feliz :)
    if(valido){

        const usuario = {
            nome: nome.value,
            cpf: cpf.value,
            telefone: telefone.value,
            email: emailCad.value,
            senha: senhaCad.value
        };

        console.log("Usuário criado:", usuario);

        alert("Página de triagem em construção.");

        register.reset();
    }

});