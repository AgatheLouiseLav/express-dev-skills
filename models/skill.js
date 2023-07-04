const skills = [
	{id: 1, name: 'HTML' , level: 'unlocked', comfort: '★★★★★'},
	{id: 2, name: 'CSS' , level: 'unlocked', comfort: '★★★★★'},
	{id: 3, name: 'JavaScript' , level: 'unlocked', comfort: '★★★★'},
	{id: 4, name: 'Node.js' , level: 'unlocked', comfort: '★★★★'},
	{id: 5, name: 'Express' , level: 'in progress', comfort: '★★★★'},
	{id: 6, name: 'MongoDB' , level: 'locked', comfort: 'None'},
	{id: 7, name: 'React' , level: 'locked', comfort: '★★'}
];

module.exports = {
	getAll,
	getOne
}

function getAll() {
	return skills
}

function getOne(id) {
	id = parseInt(id);
	return skills.find(skill => skill.id === id)
}