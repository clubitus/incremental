var multM = 1;
var priceUPGPR = 10;
var priceUPGT = 25;
var priceUPGA = 50;
var money = 100;
var auto = 0;
var interV = 2000;
//Funtions that allow the program to work
//---------------------------------------------------------------
//refresh values
function refreshPage(){
	document.getElementById('balance').innerHTML = "Money : " + money;
	document.getElementById('priceUPGPR').innerHTML = priceUPGPR;
	document.getElementById('priceUPGT').innerHTML = priceUPGT;
	document.getElementById('priceUPGA').innerHTML = priceUPGA;
	}
//----------------------------------------------------------------
function printMoney() {
	money = parseInt(money);
	money = money+multM;
	refreshPage();
}
function upgradePrinter() {
	if (money >= priceUPGPR){ 
		money = money - priceUPGPR;
		priceUPGPR = priceUPGPR * 1.5;
		multM+=1;
		refreshPage();
	}
	
}
function upgradeTime() {
	if (money >= priceUPGT){ 
		money -= priceUPGT;
		priceUPGT = priceUPGT * 2;
		auto+=1;
		refreshPage();
	}
	
}
function upgradeAuto() {
	if (money >= priceUPGA){ 
		money -= priceUPGA;
		priceUPGA = priceUPGA * 2;
		interV-=200;
		refreshPage();
	}
	
}

intervalId = setInterval(function() {money += (auto*multM);refreshPage();}, interV);
