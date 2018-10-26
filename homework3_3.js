var names = ['Anton', 'Masha', 'Ben', 'Katarina', 'Sasha', 'Marshal'];
obj = {};
names.forEach(function(eachName, index) {
	var key = index
	obj[key] = eachName;
	return (obj);

});
console.log(obj);