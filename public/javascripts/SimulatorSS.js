const typeOfWorker = document.getElementById('workers');
const profitYear = document.getElementById('profitYear');
const formSS = document.getElementById('simulatorSS');

console.log(simulator.minENICO)

const Tax = (e) => {
	e.preventDefault();
    
	let output = 0;
	let profit = profitYear.value;
    
	if(typeOfWorker.value="ENI"){
		if(profit/12 >= simulator.minENICO){
			console.log(output = (profit/12) * simulator.taxENI);
		} else {
			console.log(output);
		}
	}
    
};

formSS.addEventListener('submit', Tax);