const { Simulator, SimulatorIMT, SimulatorImtIS } = require('../../models/back-office/Simulator');

const getAllSimulatorsPage = (req, res) => {
	res.render('back-office/simulators', {user: req.user});
};

const getSegSocialSimulatorPage = (req, res) => {
	Simulator.get((err, results) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			let simulator = results[0];
			res.render('back-office/simulatorSegSocial', {user: req.user, simulator});
		}		
	});
};

const editSegSocialSimulator = (req, res) => {
	Simulator.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
};

const getMaisValiasSimulatorPage = (req, res) => {
	Simulator.getMaisValias((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			let simulatorMaisValias = results;
			res.render('back-office/simulatorMaisValias', {user: req.user, simulatorMaisValias});
		}
	});
};

const editMaisValiasSimulator = (req, res) => {
	Simulator.editMaisValias(req.body, (err) => {
		// console.log('req:', req.body);
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
};

const getIMTSimulatorsPage = (req, res)  => {
	SimulatorIMT.get((err, {IStax, imtInfo}) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the imt simulator information' });
		} else {
			/* for(let i=0; i<imtInfo.length; i++){
				imtInfo[i].lowEnd == 0 ? imtInfo[i].lowEnd = 'Please don\'t change this value!' : imtInfo[i].lowEnd;
				console.log(imtInfo[i].lowEnd);
			} */
			//console.log(imtInfo);
			res.render('back-office/simulatorIMT', {user: req.user, imtsimulator : imtInfo, IStax});
		}		
	});
};

const editIMTSimulatorsPage = (req, res) => {
	//console.log(req.body);
	SimulatorIMT.edit(req.body, (err) => {
		console.log(err);
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
};
const editISimulatorValue = (req, res) => {
	//console.log(req.body);
	SimulatorImtIS.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
};


module.exports = {
	getSegSocialSimulatorPage,
	editSegSocialSimulator,
	getAllSimulatorsPage,
	getMaisValiasSimulatorPage,
	getIMTSimulatorsPage,
	editIMTSimulatorsPage,
	editISimulatorValue,
	editMaisValiasSimulator
};
