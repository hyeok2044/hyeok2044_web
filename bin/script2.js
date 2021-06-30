var hw = document.getElementById('hw');

hw.addEventListener('click', function() {
	var var1 = document.getElementById('var1').value;
	var var2 = document.getElementById('var2').value;
	document.getElementById("result").innerText = parseInt(var1) + parseInt(var2);
})


function getRandom() {
	return 10000000 * Math.random();
}