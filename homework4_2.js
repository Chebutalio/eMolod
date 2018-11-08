var arr = [334, 223, 212, 1, 214, 11, 154, 2342, 22, 11];
function myMap(array, func) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		newArr.push((func(array[i])));
	}
	console.log(newArr);
}
myMap(arr, function(index){
	return index + 1;
});