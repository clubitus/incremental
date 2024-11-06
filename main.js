function cacheVal(){
    document.getElementById('money').innerHTML = money;
    document.getElementById('cashflow').innerHTML = cashflow;
    document.getElementById('wareAmt').innerHTML = wareAmt;
    document.getElementById('printerLvl').innerHTML = prntLvl;
    document.getElementById('printerAmt').innerHTML =  prntAmt;
    document.getElementById('printerIntern').innerHTML = prntIntern ;
    document.getElementById('printerInternSpd').innerHTML = prntInternSpd ;
    document.getElementById('printerLvlPrice').innerHTML = prntLvlPrice ;
    document.getElementById('printerAmtPrice').innerHTML = prntAmtPrice ;
    document.getElementById('printerInternPrice').innerHTML = prntInternPrice ;
    document.getElementById('printerInternSpdPrice').innerHTML = prntInternSpdPrice ;
}
let money = 1 ;
let cashflow = 0;
let wareAmt = 0;
let prntLvl = 0;
let prntAmt = 0;
let prntIntern = 0;
let prntInternSpd = 0;
let prntLvlPrice = 0;
let prntAmtPrice = 0;
let prntInternPrice = 25;
let prntInternSpdPrice = 50;
cacheVal();

function printMoney() {
	money += prntAmt*prntLvl;
	cacheVal();
}
function upgPrntAmt() {
	if (money >= prntAmtPrice){ 
		money -= prntAmtPrice;
		if (prntAmtPrice < 50){
            prntAmtPrice +=15;
        }
        else{
            prntAmtPrice *= 1.75;
        }  
		prntAmt+=1;
		cacheVal();
	}
	
}
function upgPrntLvl() {
	if (money >= prntLvlPrice){ 
		money -= prntLvlPrice;
		if (prntLvlPrice < 25){
            prntLvlPrice +=5;
        }
        else{
            prntLvlPrice *= 1.3;
        }  
		prntLvl+=1;
		cacheVal();
	}
	
}