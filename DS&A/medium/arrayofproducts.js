// O(n) time | O(n) space
function arrayOfProducts(array) {
	const products = [];
	let leftProducts = 1;
	for(let i = 0 ; i < array.length; i++){
		products[i] = leftProducts;
		leftProducts *= array[i];
	}
	let rightProducts = 1;
	for(let i = array.length-1; i >= 0; i--){
		products[i] *= rightProducts;
		rightProducts *= array[i];
	}
	return products;
}