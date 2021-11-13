//This is what happens when you refresh the page
var bit = 0;
var clickValue = 1;
var batPrice = 8;
var batCount = 0;
var apkPrice = 128;
var apkCount = 0;
var jarPrice = 1024;
var jarCount = 0;
var exePrice = 8192;
var exeCount = 0;
var macPrice = 419430400;
var hasMac = false;
var potatoPrice = 1048576;
var hasPotato = false;
var budgetPrice = 33554432;
var hasBudget = false;
var quantumPrice = 4194304000;
var hasQuantum = false;
  //Here is the where the functions are located
  function addBit () {
    bit = bit + clickValue;
  }
  function changeBit (amount) {
    bit = bit + amount;
  }

  function buyFile (price, name){
    if (bit >= price) {
      bit = bit - price
      if (name == 1){
        batCount ++
        batPrice = Math.round(batPrice * 1.3)}
      else if (name == 2){
        apkCount ++
        apkPrice = Math.round(apkPrice * 1.3)}
      else if (name == 3){
        jarCount ++
        jarPrice = Math.round(jarPrice * 1.3)}
      else if (name == 4){
        exeCount ++
        exePrice = Math.round(exePrice * 1.3)}
    }
  }
  setInterval (function (){
    bit = bit + batCount * 0.05 + apkCount * 0.4 + jarCount * 3.5 + exeCount * 20
    document.getElementById("bit").innerHTML = bitConvert(Math.round(bit));
    document.getElementById("clickValue").innerHTML = clickValue;
    document.getElementById("batPrice").innerHTML = bitConvert(batPrice);
    document.getElementById("batCount").innerHTML = batCount;
    document.getElementById("apkPrice").innerHTML = bitConvert(apkPrice);
    document.getElementById("apkCount").innerHTML = apkCount;
    document.getElementById("jarPrice").innerHTML = bitConvert(jarPrice);
    document.getElementById("jarCount").innerHTML = jarCount;
    document.getElementById("exePrice").innerHTML = bitConvert(exePrice);
    document.getElementById("exeCount").innerHTML = exeCount;
    document.getElementById("macPrice").innerHTML = bitConvert(macPrice);
    document.getElementById("potatoPrice").innerHTML = bitConvert(potatoPrice);
    document.getElementById("budgetPrice").innerHTML = bitConvert(budgetPrice);
    document.getElementById("quantumPrice").innerHTML = bitConvert(quantumPrice);
  }, 50)

  function bitConvert(x) {
    if (x >= 1024){
      if (x >= 1048576){
        if (x >= 1073741824){
          if (x >= 1099511627776){
            if (x >= 1125899906842624){
              var temp = x / 1125899906842624
              return Math.round((temp) * 100) / 100 + " pbits"
            }
            var temp = x / 1099511627776
            return Math.round((temp) * 100) / 100 + " tbits"
          }
          var temp = x / 1073741824
          return Math.round((temp) * 100) / 100 + " gbits"
        }
        var temp = x / 1048576
        return Math.round((temp) * 100) / 100 + " mbits"
      }
      var temp = x / 1024
      return Math.round((temp) * 100) / 100 + " kbits"
    }
    var temp = x
    return Math.round((temp) * 100) / 100 + " bits"
  }
