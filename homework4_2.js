var arr = [334, 223, 212, 1, 214, 11, 154, 2342, 22, 11];

Array.prototype.myMap = function() {
	var newArr = [];
	for (var i = 0; i < this.length; i++) {
		newArr.push(this[i] + 1);
	}
	console.log(newArr);
}
arr.myMap();