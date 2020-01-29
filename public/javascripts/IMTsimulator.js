const formIMT = document.getElementById('IMTSimulator');
const local = document.getElementById('location');
const typeImovel = document.getElementById('type');
const valueImovel = document.getElementById('imovelValue');

const IMToutput = document.getElementById('outputIMT');
const ISoutput = document.getElementById('outputIS');
const Totaloutput = document.getElementById('outputTotal');

const simulate = (e) => {
	e.preventDefault();
	/* console.log(local.value);
	console.log(typeImovel.value);
	console.log(IMT); */
    
	const filterByType = IMT.filter(elem => elem.type == typeImovel.value);
    
	const filterByLocation = filterByType.filter(elem => elem.location == local.value);
    
	let filterByValue = {};
	if( typeImovel.value == 'Rustico' || typeImovel.value == 'Outros') {
		filterByValue=filterByLocation;
	} else {
		filterByValue = filterByLocation.filter(elem =>  
		//If imovelValue is bigger than the lowEnd and smaller than the highEnd then filter that value
		//but in case the highEnd is 0 then we should only consider if the value is bigger than the lowEnd           
			valueImovel.value >= elem.lowEnd  && (valueImovel.value < elem.highEnd || elem.highEnd == 0)
		);
	}
	//Taxa Marginal
	let marTax = filterByValue[0].marginal;
	//Taxa IS
	let isTax = IStax[0].value;

	//IMT value to pay
	let IMTvalue = marTax * valueImovel.value - filterByValue[0].benefitTaxRate;
	//IS value to pay
	let ISvalue = isTax * valueImovel.value;
	//Total value to pay
	let Total = IMTvalue + ISvalue;

	IMToutput.innerHTML = Math.round(IMTvalue) + '€';
	ISoutput.innerHTML = Math.round(ISvalue) + '€';
	Totaloutput.innerHTML = Math.round(Total) + '€';

};



formIMT.addEventListener('submit', simulate);