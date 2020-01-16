const typeOfWorker = document.getElementById('workers');
const profitYear = document.getElementById('profitYear');
const formSS = document.getElementById('simulatorSS');
const regime = document.getElementById('regime');
const monthsOfActivity = document.getElementById('monthsOfActivity');

console.log(simulator)



const Tax = (e) => {
	e.preventDefault();
	let profit = profitYear.value;
	let typeOfWork = typeOfWorker.value
    let typeOfRegime = regime.value
    let numberOfMonths = monthsOfActivity.value

	let output = 0;
	
	if(typeOfWork === 'ENI'){
		if(profit/12 >= simulator.minENICO){
			console.log(output = (profit/12) * simulator.taxENI);
		} else {
			console.log(output = 0);
		}
	}
    
	if(typeOfWork === 'TI' && typeOfRegime === 'CO'){
		if(profit/12 >= simulator.minTICO){
			console.log(output = (profit/12) * simulator.taxTI);
		} else {
			console.log(output = 0);
		}
    }
    
    if(typeOfWork === 'TI' && typeOfRegime === 'Simp' && numberOfMonths === '<=12'){
        console.log(output=0)
    }
};


const disableInputRegime = () => {
	if(typeOfWorker.value === 'ENI'){
		regime.setAttribute('disabled', '');
	} else {
		regime.removeAttribute('disabled');
	}       
};

const disableInputActivity = () => {
	if(regime.value === 'CO' || typeOfWorker.value === 'ENI'){
		monthsOfActivity.setAttribute('disabled', '');
	} else {
		monthsOfActivity.removeAttribute('disabled');
	}
};

const disableInputs = () => {
	disableInputRegime();
	disableInputActivity();
};

formSS.addEventListener('submit', Tax);
typeOfWorker.addEventListener('change', disableInputs);
regime.addEventListener('change', disableInputActivity);