const Simulator = require('../../models/back-office/Simulator');

const getSimulatorPage = (req, res) => {
	Simulator.get((err, results) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			let simulator = results[0];
			console.log(simulator);
			res.render('back-office/simulators', {user: req.user, simulator});
		}		
	});
};

const editSimulator = (req, res) => {
	Simulator.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/simulators');
	});
}

// const renderSSSimulator = (req, res) => {
// 	res.render('back-office/simulatorSS', {user: req.user});
// };

module.exports = {
	getSimulatorPage,
	editSimulator
};
