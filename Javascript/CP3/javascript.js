var aluno = [];

function botao(){
    var nome = document.getElementById('nome').value;
    var nota1 = document.getElementById(('nota1')).value;
    var nota2 = document.getElementById(('nota2')).value;
    var media = (nota1 + nota2);
    console.log("Sua Primeira nota foi:",nota1);
    console.log("Sua segunda nota foi:", nota2);
    console.log("Sua media foi de:", media)
    if (media>=6) {
        console.log("Portanto, você foi Aprovado")
    }
    if(6 > media && media >3 ){
        console.log("Portanto, você está de Recuperação")}
    if(media<3){
        console.log("Portanto, você foi Reprovado")
    }
    aluno.push({nome: nome, nota1: nota1, nota2: nota2, media: media})
    vinhos.push({ Nome: nome, Tipo: tipo, Safra: safra, Preco: preco, Pessoas: pessoas, calcularGarrafas: calcularGarrafas, calcularVinho1: calcularVinho1, calcularVinho2: calcularVinho2, calcularPreco1: calcularPreco1, calcularPreco2, calcularPreco2});

    console.log('Nome:', nome);
    console.log('Nota1:', nota1);
    console.log('Nota2:', nota2);
    console.log('Media:', media);
    
    document.getElementById('Nome').value = '';
    document.getElementById('Nota1').value = '';
    document.getElementById('Nota2').value = '';
    document.getElementById('media').value = '';
    
}
