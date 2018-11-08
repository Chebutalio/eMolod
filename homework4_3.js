var arr = [1, 24, 22, 11, 23, 13, 23, 63, 85];

function mySort(array) {
	var done = false;
	while (!done) {
		done = true;
		for (var i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				done = false;
				var elem = array[i - 1];
				array[i - 1] = array [i];
				array[i] = elem;
			}
		}
	}
	return array;
}

mySort(arr);
console.log(arr);