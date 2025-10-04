const login = 1234;
const senha = 9999;

// Pede o login do usuário
let login1 = parseInt(prompt("Digite o seu login de usuário:"));

if (login !== login1) {
    alert("Usuário Incorreto!");
} else {
    // Se o login estiver correto, pede a senha
    let senha1 = parseInt(prompt("Digite sua senha:"));

    if (senha !== senha1) {
        alert("Senha Incorreta!");
    } else {
        alert("Acesso Permitido!");
    }
}