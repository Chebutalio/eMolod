var arr = [1, 18, 23, 153, 222, 124, 9, 'kappa', 'che'];
	Array.prototype.myForEach = function() {
		for (var i = 0; i < this.length; i++) {
	console.log(this[i]);
	}
}
arr.myForEach();