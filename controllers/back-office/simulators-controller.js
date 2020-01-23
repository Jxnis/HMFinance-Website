const { Simulator, SimulatorIMT } = require('../../models/back-office/Simulator');

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
			console.log(simulator);
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
	res.render('back-office/simulatorMaisValias', {user: req.user});
};

const getIMTSimulatorsPage = (req, res)  => {
	SimulatorIMT.get((err, results) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the imt simulator information' });
		} else {
			
			res.render('back-office/simulatorIMT', {user: req.user, imtsimulator : results});
		}		
	});
};

const editIMTSimulatorsPage = (req, res) => {
	console.log(req.body);
	SimulatorIMT.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
};

// const renderSSSimulator = (req, res) => {
// 	res.render('back-office/simulatorSS', {user: req.user});
// };

module.exports = {
	getSegSocialSimulatorPage,
	editSegSocialSimulator,
	getAllSimulatorsPage,
	getMaisValiasSimulatorPage,
	getIMTSimulatorsPage,
	editIMTSimulatorsPage
};
