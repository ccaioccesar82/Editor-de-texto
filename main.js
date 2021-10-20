escopo = () => {
let divPrincipal = document.querySelector('.div-principal');
let output =  document.querySelector('.caixa-texto');
let botoes = document.querySelectorAll('.btn');

console.log(botoes);

for(let btn of botoes  ) {

btn.addEventListener ('click', () => {

let cmd = btn.dataset['command'];

document.execCommand(cmd, false, null);

})

}
}

escopo();













