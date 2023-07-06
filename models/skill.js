const skills = [
	{id: 1, name: 'HTML' , level: 'unlocked', done: true , comfort: '★★★★★'},
	{id: 2, name: 'CSS' , level: 'unlocked', done: true , comfort: '★★★★★'},
	{id: 3, name: 'JavaScript' , level: 'unlocked', done: true , comfort: '★★★★'},
	{id: 4, name: 'Node.js' , level: 'unlocked', done: true , comfort: '★★★★'},
	{id: 5, name: 'Express' , level: 'in progress', done: true , comfort: '★★★★'},
	{id: 6, name: 'MongoDB' , level: 'locked', done: false , comfort: ''},
	{id: 7, name: 'React' , level: 'locked', done: false , comfort: '★★'}
];

module.exports = {
	getAll,
	getOne,
	create,
	deleteSkill,
	update
};

function update(id, updateSkills) {
	id = parseInt(id);
	const skill = skills.find(skill => skill.id === id);
 	Object.assign(skill, updateSkills);
}

function deleteSkill(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

function create(skill) {
	skill.id = Date.now() % 100000;
	skill.done = false;
	//skill.level = " ";
	//skill.comfort = " ";
	console.log(skill);
  	skills.push(skill);
};

function getAll() {
	return skills
};

function getOne(id) {
	id = parseInt(id);
	return skills.find(skill => skill.id === id)
};