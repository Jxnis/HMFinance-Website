const Clients = require('../../models/back-office/Clients');

const getClients = (req, res) => {
	
	Clients.get((err, results) => {
		if (err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			// console.log('We got the clients succefully');
			
			let clients = results;
			// console.log(clients);
			res.render('back-office/clients', {user: req.user, clients });
		}
	});
};

const getNewClientPage = (req, res) => {
	// console.log('We got the add new clients page');
	res.render('back-office/addClient');
};
const addNewClient = (req, res) => {
	// console.log('client added');
	Clients.add(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/clients');
	});
};


const toggleClientisShowing = (req, res) => {
	// console.log('is showing toggleClient was called');
	Clients.toggle(req.params, (err) => {
		if (err) {
			// console.log(err);
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error changing isShowing value' });
		} else {
			// console.log('The isShowing value was changed succefully');
			res.redirect('/dashboard/clients');
		}
	});
};

const getEditClientPage =  (req, res) => {
	// console.log('We got the edit client page');
	Clients.getById(req.params.id, (err, results) => {
		if(err) return res.render('error', { err });
		// console.log(results[0]);
		let client = results[0];
		res.render('back-office/editClient', { client });
	});
	
};
const editClients = (req, res) => {
	// console.log(req.body);
	Clients.edit(req, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/clients');
	});
};

const deleteClients = (req, res) => {
	console.log(req.params.id);
	Clients.delete(req.params.id, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/clients');
	});
};


module.exports = {
	getClients,
	getNewClientPage,
	addNewClient,
	toggleClientisShowing,
	getEditClientPage,
	editClients,
	deleteClients
};