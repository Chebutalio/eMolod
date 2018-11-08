var arr = [1, 24, 22, 11, 23, 13, 23, 63, 85];

Array.prototype.mySort = function() {
	var done = false;
	var elem = 0;
	while (!done) {
		done = true;
		for (var i = 1; i < this.length; i++) {
			if (this[i - 1] > this[i]) {
				done = false;
				elem = this[i - 1];
				this[i - 1] = this [i];
				this[i] = elem;
			}
		}
	}
	return this;
}

arr.mySort();
console.log(arr);
