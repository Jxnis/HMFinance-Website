const formSS = document.getElementById('simulatorSS');
const typeOfWorker = document.getElementById('workers');
const regime = document.getElementById('regime');
const monthsOfActivity = document.getElementById('monthsOfActivity');
const activity = document.getElementById('typeOfActivity');
const grossWage = document.getElementById('grossWage');
const profitYear = document.getElementById('profitYear');
const profitYearServices = document.getElementById('profitYearServices');
const profitYearMerchandise = document.getElementById('profitYearMerchandise');
const profitYearOthers = document.getElementById('profitYearOthers');
const resultsOutput = document.getElementById('output');

console.log(simulator);

//Add also the max value

const Tax = (e) => {
	e.preventDefault();
	let profit = profitYear.value;
	let typeOfWork = typeOfWorker.value;
	let typeOfRegime = regime.value;
	let numberOfMonths = monthsOfActivity.value;
	let typeOfActivity = activity.value;
	let grossRevenueOnServices = profitYearServices.value;
	let grossRevenueOnMerchandise = profitYearMerchandise.value;
	let grossRevenueOnOthers = profitYearOthers.value;
	let grossWageValue = grossWage.value;

	let output = 0;
	
	if(typeOfWork === 'ENI'){
		if(profit/12 >= simulator.minENICO){
			output = (profit/12) * simulator.taxENI;
		} else {
			output = 0;
		}
	}
    
	if(typeOfWork === 'TI' && typeOfRegime === 'CO'){
		if(profit/12 >= simulator.minTICO){
			output = (profit/12) * simulator.taxTI;
		} else {
			output = 0;
		}
	}
    
	if(typeOfWork === 'TI' && typeOfRegime === 'Simp' && numberOfMonths === '<=12'){
		output=0;
	}

	if(typeOfActivity === 'Pensionist'){
		output = 0;
	}
    
	if(typeOfActivity === 'Freela'){
		let taxServices = 0;
		let taxMerchandise = 0;
		let taxOthers = 0;
		if(grossRevenueOnServices / 12 <= simulator.minTISimplificado){
			taxServices = 0;
		} 
		if(grossRevenueOnServices / 12 > simulator.minTISimplificado) {
			taxServices = grossRevenueOnServices * simulator.percentageServices;
		}
		if(grossRevenueOnMerchandise / 12 <= simulator.minTISimplificado){
			taxMerchandise = 0;
		}
		if(grossRevenueOnMerchandise / 12 > simulator.minTISimplificado){
			taxMerchandise = grossRevenueOnMerchandise * simulator.percentageGoods;
		}
		if(grossRevenueOnOthers / 12 <= simulator.minTISimplificado){
			taxOthers = 0;
		}
		if(grossRevenueOnOthers / 12 > simulator.minTISimplificado){
			taxOthers = grossRevenueOnOthers * simulator.percentageOthers;
		}
		output = (taxServices + taxMerchandise + taxOthers) * (1/3) * (simulator.taxTI);
	}

	if(grossWageValue <= simulator.grossWageExemption && grossWageValue != 0) {
		let taxServices = 0;
		let taxMerchandise = 0;
		let taxOthers = 0;
		if(grossRevenueOnServices / 12 <= simulator.minTISimplificado){
			taxServices = 0;
		} 
		if(grossRevenueOnServices / 12 > simulator.minTISimplificado) {
			taxServices = grossRevenueOnServices * simulator.percentageServices;
		}
		if(grossRevenueOnMerchandise / 12 <= simulator.minTISimplificado){
			taxMerchandise = 0;
		}
		if(grossRevenueOnMerchandise / 12 > simulator.minTISimplificado){
			taxMerchandise = grossRevenueOnMerchandise * simulator.percentageGoods;
		}
		if(grossRevenueOnOthers / 12 <= simulator.minTISimplificado){
			taxOthers = 0;
		}
		if(grossRevenueOnOthers / 12 > simulator.minTISimplificado){
			taxOthers = grossRevenueOnOthers * simulator.percentageOthers;
		}
		output = (taxServices + taxMerchandise + taxOthers) * (1/3) * (simulator.taxTI);
	}

	if(grossWageValue > simulator.grossWageExemption && grossWageValue != 0) {
		let taxServices = 0;
		let taxMerchandise = 0;
		let taxOthers = 0;
		if(grossRevenueOnServices / 12 <= simulator.minTISimplificado){
			taxServices = 0;
		} 
		if(grossRevenueOnServices / 12 > simulator.minTISimplificado) {
			taxServices = grossRevenueOnServices * simulator.percentageServices - simulator.revenueExemption * simulator.percentageRevenueExemption;
			if(taxServices < 0){
				taxServices = 0;
			}
		}
		if(grossRevenueOnMerchandise / 12 <= simulator.minTISimplificado){
			taxMerchandise = 0;
		}
		if(grossRevenueOnMerchandise / 12 > simulator.minTISimplificado){
			taxMerchandise = grossRevenueOnMerchandise * simulator.percentageGoods - simulator.revenueExemption * simulator.percentageRevenueExemption;
			if(taxMerchandise < 0){
				taxMerchandise = 0;
			}
		}
		if(grossRevenueOnOthers / 12 <= simulator.minTISimplificado){
			taxOthers = 0;
		}
		if(grossRevenueOnOthers / 12 > simulator.minTISimplificado){
			taxOthers = grossRevenueOnOthers * simulator.percentageOthers - simulator.revenueExemption * simulator.percentageRevenueExemption;
			if(taxOthers < 0){
				taxOthers = 0;
			}
		}
		output = (taxServices + taxMerchandise + taxOthers) * simulator.taxTI;
	}
	return resultsOutput.innerHTML = output.toFixed(2);
};



formSS.addEventListener('submit', Tax);

const ENIRemove = () => {
	if(typeOfWorker.value === 'ENI'){
		regime.setAttribute('disabled', '');
		monthsOfActivity.setAttribute('disabled', '');
		activity.setAttribute('disabled', '');
		grossWage.setAttribute('disabled', '');
		profitYearServices.setAttribute('disabled', '');
		profitYearMerchandise.setAttribute('disabled', '');
		profitYearOthers.setAttribute('disabled', '');
	} else {
		regime.removeAttribute('disabled');
		monthsOfActivity.removeAttribute('disabled');
		activity.removeAttribute('disabled');
		grossWage.removeAttribute('disabled');
		profitYearServices.removeAttribute('disabled');
		profitYearMerchandise.removeAttribute('disabled');
		profitYearOthers.removeAttribute('disabled'); 
	}
};

typeOfWorker.addEventListener('change', ENIRemove);

const regimeRemove = () => {
	if(regime.value === 'CO'){
		monthsOfActivity.setAttribute('disabled', '');
		activity.setAttribute('disabled', '');
		grossWage.setAttribute('disabled', '');
		profitYearServices.setAttribute('disabled', '');
		profitYearMerchandise.setAttribute('disabled', '');
		profitYearOthers.setAttribute('disabled', '');
	} else {
		monthsOfActivity.removeAttribute('disabled');
		activity.removeAttribute('disabled');
		grossWage.removeAttribute('disabled');
		profitYearServices.removeAttribute('disabled');
		profitYearMerchandise.removeAttribute('disabled');
		profitYearOthers.removeAttribute('disabled'); 
	}
};

regime.addEventListener('change', regimeRemove);

const monthsOfActivityRemove = () => {
	if(monthsOfActivity.value === '<=12'){
		activity.setAttribute('disabled', '');
		grossWage.setAttribute('disabled', '');
		profitYearServices.setAttribute('disabled', '');
		profitYearMerchandise.setAttribute('disabled', '');
		profitYearOthers.setAttribute('disabled', '');
	} else {
		activity.removeAttribute('disabled');
		grossWage.removeAttribute('disabled');
		profitYearServices.removeAttribute('disabled');
		profitYearMerchandise.removeAttribute('disabled');
		profitYearOthers.removeAttribute('disabled');
	}
};

monthsOfActivity.addEventListener('change', monthsOfActivityRemove);

const activityRemove= () => {
	if(activity.value === 'Pensionist'){
		profitYear.removeAttribute('disabled', '');
		grossWage.setAttribute('disabled', '');
		profitYearServices.setAttribute('disabled', '');
		profitYearMerchandise.setAttribute('disabled', '');
		profitYearOthers.setAttribute('disabled', '');
	} else if (activity.value === 'Freela'){
		grossWage.setAttribute('disabled', '');
		profitYear.setAttribute('disabled', '');
		profitYearServices.removeAttribute('disabled');
		profitYearMerchandise.removeAttribute('disabled');
		profitYearOthers.removeAttribute('disabled');
	} else {
		profitYear.setAttribute('disabled', '');
		grossWage.removeAttribute('disabled');
		profitYearServices.removeAttribute('disabled');
		profitYearMerchandise.removeAttribute('disabled');
		profitYearOthers.removeAttribute('disabled');
	}
};

activity.addEventListener('change', activityRemove);

const grossRevenueMonth = () => {
	if(grossWage.value <= simulator.grossWageExemption) {
		profitYear.setAttribute('disabled', '');	
	} else {
		profitYear.removeAttribute('disabled', '');		
	}

	if(grossWage.value > simulator.grossWageExemption) {
		profitYear.setAttribute('disabled', '');
	} 
};

grossWage.addEventListener('change', grossRevenueMonth); 