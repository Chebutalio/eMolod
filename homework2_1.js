		var arr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
		var result = arr.reduce(function(sum, current) {
			return sum + current;
		}, 0);

		function MaxMinReplace(arr) {
			maxElem = arr[0];
			minElem = arr[0];
			var minIndex = 0;
			var maxIndex = 0;
			for (var i = 0; i < arr.length; i++) {
				if (maxElem < arr[i]) {
					maxElem = arr[i];
					maxIndex = i;

				} else if (minElem > arr[i]) {
					minElem = arr[i];
					minIndex = i;
				}
			}
			arr[maxIndex] = minElem;
			arr[minIndex] = maxElem;
			return arr;
		}

		MaxMinReplace(arr);
		alert("sum: " + result + ", max: " + maxElem + ", min: " + minElem + ", replased array: " + arr);

