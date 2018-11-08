var arr = [334, 223, 212, 1, 214, 11, 154, 2342, 22, 11];

Array.prototype.myMap = function(func) {
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		newArr.push(func(this[i]));
	}
	console.log(newArr);
}
arr.myMap(function (elementArray) {
	return elementArray * 2;
});
