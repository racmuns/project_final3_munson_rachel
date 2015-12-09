function send(){
	alert("Thanks! Join us every Monday for free house wine with any purchase of an entree.");
}

function changeOrder(){
	var x = document.getElementById("orderForm");
	var y = document.getElementById("order");


	var price;
	if (x.elements[1].value == "escargot") {
		price = 8 * x.elements[2].value;
	}
	else if (x.elements[1].value == "duckconfit") {
		price = 32 * x.elements[2].value;
	}
	else if (x.elements[1].value == "coke") {
		price = 2.50 * x.elements[2].value;
	}
	else if (x.elements[1].value == "applegalette") {
		price = 7 * x.elements[2].value;
	}


	var total = x.elements[0].value +", your order consists of " + x.elements[2].value + " " + x.elements[1].value + " for a total of $" + price;
	y.innerHTML = total;
}
