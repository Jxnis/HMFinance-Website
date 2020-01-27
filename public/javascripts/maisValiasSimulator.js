const formMaisValias = document.getElementById('maisValiasSimulator');
const acquisitionValue = document.getElementById('acquisitionValue');
const saleValue = document.getElementById('saleValue');
const acquisitionYear = document.getElementById('acquisitionYear');
const expenses = document.getElementById('expenses');
const outputMaisValias = document.getElementById('outputMaisValias');
const estadoResidencia = document.getElementById('estadoResidencia');

const calculation = (e) => {
	e.preventDefault();
	console.log('maisvalias');
	let coeficient = 1;
	let maisValiasValue = 0;
	let output = 0;
	if(acquisitionYear.value == maisValias[3].year || acquisitionYear.value == maisValias[4].year ) {
		coeficient = 1.01;
	}
    
	if(acquisitionYear.value == maisValias[2].year) {
		coeficient = 1.02;
	}
    
	maisValiasValue = saleValue.value - (acquisitionValue.value * coeficient + expenses.value);
    
	if(maisValiasValue <= 0){
        output = 0;
        outputMaisValias.innerHTML = output;
	}
    
	if(estadoResidencia.value == 'residente'){
		outputMaisValias.innerHTML = 'Por favor contacte-nos para ter uma simulação feita à sua medida'
	}
    
	if(estadoResidencia.value == 'naoResidente' && maisValiasValue > 0){
		output = maisValiasValue * maisValias[0].taxIRS;
		outputMaisValias.innerHTML = output;
	}
	
};

formMaisValias.addEventListener('submit', calculation);
