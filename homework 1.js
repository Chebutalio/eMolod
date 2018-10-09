var a = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var b = [-1,-8,-2];
var c = [1,7,3];
var d = [1,undefined,3,5,-3];
var e = [1,NaN,3,5,-3];

function maxMin(array) {
	var max = 0;
	var min = 0; 
	for (var i = 0; i < array.length; i++) {
		if (array[i] !== NaN) {
			if (array[i] > max) {
				max = array[i];
			} else if (array[i] < min) {
				min = array[i];
			}
		} 
		console.log("max = " + max);
		console.log("min = " + min);
	}
};
maxMin(a);