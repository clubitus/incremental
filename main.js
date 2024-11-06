//Refresh + Time function ------------------------------------------------------
function cacheVal(){
    money = parseInt(money);document.getElementById('money').innerHTML = money;
    cashflow = (money - prmoney);prmoney = money;document.getElementById('cashflow').innerHTML = cashflow;
    document.getElementById('wareAmt').innerHTML = wareAmt;
    document.getElementById('printerLvl').innerHTML = prntLvl;
    document.getElementById('printerAmt').innerHTML =  prntAmt;
    document.getElementById('printerIntern').innerHTML = prntIntern ;
    document.getElementById('printerInternSpd').innerHTML = prntInternSpd * -1 ;
    prntLvlPrice= parseInt(prntLvlPrice);document.getElementById('printerLvlPrice').innerHTML = prntLvlPrice ;
    prntAmtPrice= parseInt(prntAmtPrice);document.getElementById('printerAmtPrice').innerHTML = prntAmtPrice ;
    prntInternPrice= parseInt(prntInternPrice);document.getElementById('printerInternPrice').innerHTML = prntInternPrice ;
    prntInternSpdPrice= parseInt(prntInternSpdPrice);document.getElementById('printerInternSpdPrice').innerHTML = prntInternSpdPrice ;
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//money + stats Values ---------------------------------------------------------
let money = 1 ; let cashflow = 0; let prmoney = 1;
//warehouse Values -------------------------------------------------------------
let wareAmt = 0;
//Printer Values ---------------------------------------------------------------
let prntLvl = 0;let prntAmt = 0;let prntIntern = 0;let prntInternSpd = 2000;
let prntLvlPrice = 0;let prntAmtPrice = 0;let prntInternPrice = 25;let prntInternSpdPrice = 50;
//------------------------------------------------------------------------------
//Printer ----------------------------------------------------------------------
function printMoney() { money += prntAmt*prntLvl; cacheVal();}
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
        wareAmt+=1;
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
function upgPrntInt() {
	if (money >= prntInternPrice){ 
		money -= prntInternPrice;
        prntInternPrice *= 1.7;  
		prntIntern+=1;
		cacheVal();
	}
}
function upgPrntIntSpd() {
	if (money >= prntInternSpdPrice){ 
		
        if (prntInternSpd > 200){
            money -= prntInternSpdPrice;
            prntInternSpdPrice *= 1.7;  
		    prntInternSpd-=200;
        } 
        else{
            prntInternSpd = 100;
            printInternSpdPrice = 9999999999;
        }
        cacheVal();
	}
}
setInterval(function() {
    //printer
   setInterval(function(){ money+= (prntIntern*(prntAmt*prntLvl)); }, prntInternSpd);
    
    cacheVal();
}, 100);



