//Hier worden alle variables gedeclared
var bit = 0;
var storedBit = localStorage.getItem("storedBit");
var clickValue = 0;
var storedClickValue = localStorage.getItem("storedClickValue");
var batPrice = 16;
var batCount = 0;
var batValue = 1;
var batTotal = 0;
var apkPrice = 128;
var apkCount = 0;
var apkValue = 8;
var apkTotal = 0;
var jarPrice = 1024;
var jarCount = 0;
var jarValue = 64;
var jarTotal = 0;
var exePrice = 8192;
var exeCount = 0;
var exeValue = 512;
var exeTotal = 0;
var macPrice = 268435456;
var macCount = 0;
var macValue = 1;
var macTotal = 0;
var macTimer = 0;
var potatoPrice = 524288;
var potatoCount = 0;
var potatoValue = 1;
var potatoTotal = 0;
var potatoTimer = 0;
var budgetPrice = 4194304;
var budgetCount = 0;
var budgetValue = 1;
var budgetTotal = 0;
var budgetTimer = 0;
var quantumPrice = 1073741824;
var quantumCount = 0;
var quantumValue = 1;
var quantumTotal = 0;
var quantumTimer = 0;
  //Hier vind je de functions
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
        batPrice = Math.round(batPrice * 1.15)}
      else if (name == 2){
        apkCount ++
        apkPrice = Math.round(apkPrice * 1.15)}
      else if (name == 3){
        jarCount ++
        jarPrice = Math.round(jarPrice * 1.15)}
      else if (name == 4){
        exeCount ++
        exePrice = Math.round(exePrice * 1.15)}
    }
  }
  function buyPc (price, name){
    if (bit >= price){
      bit = bit - price
      if (name == 1){
        macCount ++
        macPrice = Math.round(macPrice * 1.1)}
      if (name == 2){
        potatoCount ++
        potatoPrice = Math.round(potatoPrice * 1.1)}
      if (name == 3){
        budgetCount ++
        budgetPrice = Math.round(budgetPrice * 1.1)}
      if (name == 4){
        quantumCount ++
        quantumPrice = Math.round(quantumPrice * 1.1)}
    }
  }
  //De function Compute berekent hoeveel files je er iedere seconde bij krijgt, hoeveel deze hierna kosten, en past deze direct aan
  function compute (type) {
    if (type == mac) {
      for (i=0;i<macCount;i++) {
        if (macTimer >= 20) {
          batCount = batCount + 1
          batPrice = Math.round(batPrice * 1.05)
          macTimer = 0}
        else {
          macTimer ++
    }}}
    else if (type == potato) {
      for (i=0;i<potatoCount;i++) {
        if (potatoTimer >= 20) {
          apkCount = apkCount + 1
          apkPrice = Math.round(apkPrice * 1.05)
          potatoTimer = 0}
        else {
          potatoTimer ++
    }}}
    else if (type == budget) {
      for (i=0;i<budgetCount;i++) {
        if (budgetTimer >= 20) {
          jarCount = jarCount + 1
          jarPrice = Math.round(jarPrice * 1.05)
          budgetTimer = 0}
        else {
          budgetTimer ++
    }}}
    else if (type == quantum) {
      for (i=0;i<quantumCount;i++) {
        if (quantumTimer >= 20) {
          exeCount = exeCount + 1
          exePrice = Math.round(exePrice * 1.05)
          quantumTimer = 0}
        else {
          quantumTimer ++
    }}}
  }
  //Dit is de game loop die elke 0.05 Seconde afgaat
  setInterval (function (){
    bit = bit + batCount * batValue / 20 + apkCount * apkValue / 20 + jarCount * jarValue / 20 + exeCount * exeValue / 20
    batTotal = batTotal + batCount * batValue / 20
    apkTotal = apkTotal + apkCount * apkValue / 20
    jarTotal = jarTotal + jarCount * jarValue / 20
    exeTotal = exeTotal + exeCount * exeValue / 20
    clickValue = Math.round(1 + batValue * batCount * 0.2 + apkValue * apkCount * 0.2 + jarValue * jarCount * 0.2 + exeValue * exeCount * 0.2)
    compute (mac)
    compute (potato)
    compute (budget)
    compute (quantum)

    //Dit stuurt JS code door naar Index.html
    document.getElementById("title").innerHTML = bitConvert(Math.round(bit)) + "Bits - BitClicker"
    document.getElementById("bit").innerHTML = bitConvert(Math.round(bit))
    document.getElementById("clickValue").innerHTML = bitConvert(clickValue)
    document.getElementById("batPrice").innerHTML = bitConvert(batPrice)
    document.getElementById("batTotal").innerHTML = bitConvert(batTotal)
    document.getElementById("batCount").innerHTML = Math.round(batCount)
    document.getElementById("batValue").innerHTML = bitConvert(batValue)
    document.getElementById("batOutput").innerHTML = bitConvert(batValue * batCount)
    document.getElementById("apkPrice").innerHTML = bitConvert(apkPrice)
    document.getElementById("apkTotal").innerHTML = bitConvert(apkTotal)
    document.getElementById("apkCount").innerHTML = Math.round(apkCount)
    document.getElementById("apkValue").innerHTML = bitConvert(apkValue)
    document.getElementById("apkOutput").innerHTML = bitConvert(apkValue * apkCount)
    document.getElementById("jarPrice").innerHTML = bitConvert(jarPrice)
    document.getElementById("jarTotal").innerHTML = bitConvert(jarTotal)
    document.getElementById("jarCount").innerHTML = Math.round(jarCount)
    document.getElementById("jarValue").innerHTML = bitConvert(jarValue)
    document.getElementById("jarOutput").innerHTML = bitConvert(jarValue * jarCount)
    document.getElementById("exePrice").innerHTML = bitConvert(exePrice)
    document.getElementById("exeTotal").innerHTML = bitConvert(exeTotal)
    document.getElementById("exeCount").innerHTML = Math.round(exeCount)
    document.getElementById("exeValue").innerHTML = bitConvert(exeValue)
    document.getElementById("exeOutput").innerHTML = bitConvert(exeValue * exeCount)
    document.getElementById("macPrice").innerHTML = bitConvert(macPrice)
    document.getElementById("macTotal").innerHTML = bitConvert(macTotal)
    document.getElementById("macCount").innerHTML = Math.round(macCount)
    document.getElementById("macValue").innerHTML = bitConvert(macValue)
    document.getElementById("macOutput").innerHTML = bitConvert(macValue * macCount)
    document.getElementById("potatoPrice").innerHTML = bitConvert(potatoPrice)
    document.getElementById("potatoTotal").innerHTML = bitConvert(potatoTotal)
    document.getElementById("potatoCount").innerHTML = Math.round(potatoCount)
    document.getElementById("potatoValue").innerHTML = bitConvert(potatoValue)
    document.getElementById("potatoOutput").innerHTML = bitConvert(potatoValue * potatoCount)
    document.getElementById("budgetPrice").innerHTML = bitConvert(budgetPrice)
    document.getElementById("budgetTotal").innerHTML = bitConvert(budgetTotal)
    document.getElementById("budgetCount").innerHTML = Math.round(budgetCount)
    document.getElementById("budgetValue").innerHTML = bitConvert(budgetValue)
    document.getElementById("budgetOutput").innerHTML = bitConvert(budgetValue * macCount)
    document.getElementById("quantumPrice").innerHTML = bitConvert(quantumPrice)
    document.getElementById("quantumTotal").innerHTML = bitConvert(quantumTotal)
    document.getElementById("quantumCount").innerHTML = Math.round(quantumCount)
    document.getElementById("quantumValue").innerHTML = bitConvert(quantumValue)
    document.getElementById("quantumOutput").innerHTML = bitConvert(quantumValue * quantumCount)

    //Deze forloop activeert 1 keer in de minuut en saved dan je game data
    for (i=0;i<120;i++) {
      save()
    }
  }, 50)

  //Deze function rekent de standaard Bit einheid om in kilobits tot petabits
  function bitConvert(x) {
    if (x >= 1024){
      if (x >= 1048576){
        if (x >= 1073741824){
          if (x >= 1099511627776){
            if (x >= 1125899906842624){
              var temp = x / 1125899906842624
              return Math.round((temp) * 100) / 100 + " P"
            }
            var temp = x / 1099511627776
            return Math.round((temp) * 100) / 100 + " T"
          }
          var temp = x / 1073741824
          return Math.round((temp) * 100) / 100 + " G"
        }
        var temp = x / 1048576
        return Math.round((temp) * 100) / 100 + " M"
      }
      var temp = x / 1024
      return Math.round((temp) * 100) / 100 + " K"
    }
    var temp = x
    return Math.round(temp) + " "
  }

  function save() {
    localStorage.setItem("storedBit", bit)
  }
