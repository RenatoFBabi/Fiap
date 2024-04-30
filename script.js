var vinhos = [];

function adicionar() {
    var nome = document.getElementById('Nome').value;
    var tipo = document.getElementById('Tipo').value;
    var safra = document.getElementById('Safra').value;
    var preco = document.getElementById('Preco').value;
    var pessoas = document.getElementById('Pessoas').value;

    let calcularGarrafas = Math.floor(pessoas * 0.2);
    let calcularVinho1 = Math.floor(calcularGarrafas / 0.750);
    let calcularVinho2 = Math.floor(calcularGarrafas / 1.5);
    let calcularPreco1 = Math.floor(calcularVinho1 * 30);
    let calcularPreco2 = Math.floor(calcularVinho2 * 75);
   
    vinhos.push({ Nome: nome, Tipo: tipo, Safra: safra, Preco: preco, Pessoas: pessoas, calcularGarrafas: calcularGarrafas, calcularVinho1: calcularVinho1, calcularVinho2: calcularVinho2, calcularPreco1: calcularPreco1, calcularPreco2, calcularPreco2});

    console.log('Nome:', nome);
    console.log('Tipo:', tipo);
    console.log('Safra:', safra);
    console.log('Preco:', preco);
    console.log('Pessoas:', pessoas);
    console.log('Litros necessários:', calcularGarrafas);
    console.log('Sendo assim, considerando garrafas de 750ml, o valor total de garrafas será de: ', calcularVinho1);
    console.log('Outra opção, considerando garrafas de 1,5L, o valor total de garrafas será de: ', calcularVinho2);
    
    document.getElementById('Nome').value = '';
    document.getElementById('Tipo').value = '';
    document.getElementById('Safra').value = '';
    document.getElementById('Preco').value = '';
    document.getElementById('Pessoas').value = '';
    document.getElementById('calcularGarrafas').value = '';
    document.getElementById('calcularVinho1').value = '';
    document.getElementById('calcularVinho2').value = '';
}

function caracteristicasvinhos() {
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = '';

    vinhos.forEach(function(vinho) {
        infoDiv.innerHTML += 'Características do vinho adicionado: ' + '<br>';
        infoDiv.innerHTML += 'Nome: ' + vinho.Nome + '<br>';
        infoDiv.innerHTML += 'Tipo: ' + vinho.Tipo + '<br>';
        infoDiv.innerHTML += 'Safra: ' + vinho.Safra + '<br>';
        infoDiv.innerHTML += 'Preço: ' + vinho.Preco + '<br>';
        infoDiv.innerHTML += '' + '<br>';
        infoDiv.innerHTML += 'Recomendações: ' + '<br>';
        infoDiv.innerHTML += 'Pessoas: ' + vinho.Pessoas + '<br>';
        infoDiv.innerHTML += 'Litros aproximados recomendados : ' + vinho.calcularGarrafas + '<br>';
        infoDiv.innerHTML += 'Com garrafas de 750ml, você deverá comprar: ' + vinho.calcularVinho1 + ' garrafas, com o valor total de:' + vinho.calcularPreco1 + 'R$' + '<br>';
        infoDiv.innerHTML += 'Já com garrafas de 1,5L, você deverá comprar: ' + vinho.calcularVinho2 + ' garrafas, com o valor total de:' + vinho.calcularPreco2 + 'R$' + '<br><br>';
    });
}