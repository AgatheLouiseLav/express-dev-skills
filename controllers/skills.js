const Skills = require('../models/skill');

module.exports = {
	index,
	show,
	new : newSkill
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