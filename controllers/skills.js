const Skills = require('../models/skill');

module.exports = {
	index,
	show,
	new : newSkill,
	create,
	delete : deleteSkill,
	edit,
	update
};

function update(req, res) {
	Skills.update(req.params.id, req.body);
	res.redirect(`/skills/${req.params.id}`);
};

function edit(req, res) {
	const skill = Skills.getOne(req.params.id);
	res.render('skills/edit',{
		title: 'Edit your Skill',
		skill
	});
};

function deleteSkill(req, res) {
	Skills.deleteSkill(req.params.id);
	res.redirect('/skills')
};

function create(req,res) {
	console.log(req.body);
	Skills.create(req.body);
	res.redirect('/skills');
};

function newSkill(req, res) {
	res.render('skills/new', {
		title : 'New Dev Skill'
	});
};

function index(req, res) {
	res.render('skills/index', {
		skills : Skills.getAll()
	});
};

function show(req, res) {
	res.render('skills/show', {
		skill: Skills.getOne(req.params.id)
	});
};