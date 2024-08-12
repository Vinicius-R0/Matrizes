function validar(){

let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;

if(email == "vinicius@gmail.com" && senha == "1985024"){
    document.getElementById('resultado').innerHTML = 'Autenticado com Sucesso!';   
} else{
    document.getElementById('resultado').innerHTML = 'Login ou Senha Invalidos!! Tente Novamente';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}


}