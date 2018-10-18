		var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
		var result = arr.reduce(function(sum, current) {
			return sum + current;
		}, 0);

		function MaxMin(array) {
			maxElem = array[0];
			minElem = array[0];
			for (var i = 0; i < array.length; i++) {
				if (maxElem < array[i]) {
					maxElem = array[i];
				}
				if (minElem > array[i]) {
					minElem = array[i];
				}
			}
			return maxElem;
			return minElem;
		}

		MaxMin(arr);
		alert("sum: " + result + ", max: " + maxElem + ", min: " + minElem);