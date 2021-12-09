//Hier worden alle variables gedeclared
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
var virusCount = 0;
var virusValue = 512;
var virusTotal = 0;
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
var quantumPrice = 41943040;
var quantumCount = 0;
var quantumValue = 1;
var quantumTotal = 0;
var quantumTimer = 0;
var playtime = 0;
var tick = 20;

//Deze function wordt gerunned zodra de html pagina wordt geopent of gerefreshed
function onLoad () {
  if (localStorage.getItem("storedBit") > 0) {
    bit = parseInt(localStorage.getItem("storedBit"))
    batPrice = parseInt(localStorage.getItem("storedBatPrice"))
    batCount = parseInt(localStorage.getItem("storedBatCount"))
    batValue = parseInt(localStorage.getItem("storedBatValue"))
    batTotal = parseInt(localStorage.getItem("storedBatTotal"))
    apkPrice = parseInt(localStorage.getItem("storedApkPrice"))
    apkCount = parseInt(localStorage.getItem("storedApkCount"))
    apkValue = parseInt(localStorage.getItem("storedApkValue"))
    apkTotal = parseInt(localStorage.getItem("storedApkTotal"))
    jarPrice = parseInt(localStorage.getItem("storedJarPrice"))
    jarCount = parseInt(localStorage.getItem("storedJarCount"))
    jarValue = parseInt(localStorage.getItem("storedJarValue"))
    jarTotal = parseInt(localStorage.getItem("storedJarTotal"))
    exePrice = parseInt(localStorage.getItem("storedExePrice"))
    exeCount = parseInt(localStorage.getItem("storedExeCount"))
    exeValue = parseInt(localStorage.getItem("storedExeValue"))
    exeTotal = parseInt(localStorage.getItem("storedExeTotal"))
    virusCount = parseInt(localStorage.getItem("storedVirusCount"))
    virusValue = parseInt(localStorage.getItem("storedVirusValue"))
    virusTotal = parseInt(localStorage.getItem("storedVirusTotal"))
    macPrice = parseInt(localStorage.getItem("storedMacPrice"))
    macCount = parseInt(localStorage.getItem("storedMacCount"))
    macValue = parseInt(localStorage.getItem("storedMacValue"))
    macTotal = parseInt(localStorage.getItem("storedMacTotal"))
    macTimer = 0;
    potatoPrice = parseInt(localStorage.getItem("storedPotatoPrice"))
    potatoCount = parseInt(localStorage.getItem("storedPotatoCount"))
    potatoValue = parseInt(localStorage.getItem("storedPotatoValue"))
    potatoTotal = parseInt(localStorage.getItem("storedPotatoTotal"))
    potatoTimer = 0;
    budgetPrice = parseInt(localStorage.getItem("storedBudgetPrice"))
    budgetCount = parseInt(localStorage.getItem("storedBudgetCount"))
    budgetValue = parseInt(localStorage.getItem("storedBudgetValue"))
    budgetTotal = parseInt(localStorage.getItem("storedBudgetTotal"))
    budgetTimer = 0;
    quantumPrice = parseInt(localStorage.getItem("storedQuantumPrice"))
    quantumCount = parseInt(localStorage.getItem("storedQuantumCount"))
    quantumValue = parseInt(localStorage.getItem("storedQuantumValue"))
    quantumTotal = parseInt(localStorage.getItem("storedQuantumTotal"))
    quantumTimer = 0;
    playtime = parseInt(localStorage.getItem("storedPlaytime"))
    var tick = 20;
  }
  else {
    restart()
  }
}


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
      else if (name == 5){
        if (virusCount >= 1){
          virusCount = 0}
          bit = bit - Math.round(Math.floor(bit) / 100)}}
        else {
          virusCount = 0
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
        if (macTimer >= tick) {
          batCount = batCount + 1
          macTimer = 0}
        else {
          macTimer ++
    }}}
    else if (type == potato) {
      for (i=0;i<potatoCount;i++) {
        if (potatoTimer >= tick) {
          apkCount = apkCount + 1
          potatoTimer = 0}
        else {
          potatoTimer ++
    }}}
    else if (type == budget) {
      for (i=0;i<budgetCount;i++) {
        if (budgetTimer >= tick) {
          jarCount = jarCount + 1
          budgetTimer = 0}
        else {
          budgetTimer ++
    }}}
    else if (type == quantum) {
      for (i=0;i<quantumCount;i++) {
        if (quantumTimer >= tick) {
          exeCount = exeCount + 1
          quantumTimer = 0}
        else {
          quantumTimer ++
    }}}
  }
  //Dit is de game loop die elke 0.05 Seconde afgaat
  setInterval (function (){
    bit = bit + batCount * batValue / tick + apkCount * apkValue / tick + jarCount * jarValue / tick + exeCount * exeValue / tick
    batTotal = batTotal + batCount * batValue / tick
    apkTotal = apkTotal + apkCount * apkValue / tick
    jarTotal = jarTotal + jarCount * jarValue / tick
    exeTotal = exeTotal + exeCount * exeValue / tick
    virusCount = virusCount + clickValue / 1024
    virusTotal = virusTotal + virusCount * virusValue / tick
    clickValue = Math.round(1 + batValue * batCount * 0.2 + apkValue * apkCount * 0.2 + jarValue * jarCount * 0.2 + exeValue * exeCount * 0.2)
    compute (mac)
    compute (potato)
    compute (budget)
    compute (quantum)
    if (bit < 0) {
      bit = 0
    }
    playtime ++
    //Dit stuurt JS code door naar Index.html
    document.getElementById("title").innerHTML = bitConvert(Math.round(bit)) + "Bits - BitClicker"
    document.getElementById("bit").innerHTML = bitConvert(Math.round(bit))
    document.getElementById("clickValue").innerHTML = bitConvert(clickValue)
    document.getElementById("batPrice").innerHTML = bitConvert(batPrice)
    document.getElementById("batTotal").innerHTML = bitConvert(batTotal)
    document.getElementById("batCount").innerHTML = bitConvert(Math.round(batCount))
    document.getElementById("batValue").innerHTML = bitConvert(batValue)
    document.getElementById("batOutput").innerHTML = bitConvert(batValue * batCount)
    document.getElementById("apkPrice").innerHTML = bitConvert(apkPrice)
    document.getElementById("apkTotal").innerHTML = bitConvert(apkTotal)
    document.getElementById("apkCount").innerHTML = bitConvert(Math.round(apkCount))
    document.getElementById("apkValue").innerHTML = bitConvert(apkValue)
    document.getElementById("apkOutput").innerHTML = bitConvert(apkValue * apkCount)
    document.getElementById("jarPrice").innerHTML = bitConvert(jarPrice)
    document.getElementById("jarTotal").innerHTML = bitConvert(jarTotal)
    document.getElementById("jarCount").innerHTML = bitConvert(Math.round(jarCount))
    document.getElementById("jarValue").innerHTML = bitConvert(jarValue)
    document.getElementById("jarOutput").innerHTML = bitConvert(jarValue * jarCount)
    document.getElementById("exePrice").innerHTML = bitConvert(exePrice)
    document.getElementById("exeTotal").innerHTML = bitConvert(exeTotal)
    document.getElementById("exeCount").innerHTML = bitConvert(Math.round(exeCount))
    document.getElementById("exeValue").innerHTML = bitConvert(exeValue)
    document.getElementById("exeOutput").innerHTML = bitConvert(exeValue * exeCount)
//    document.getElementById("virusPrice").innerHTML = bitConvert(bit / 100)
//    document.getElementById("virusTotal").innerHTML = bitConvert(virusTotal)
//    document.getElementById("virusCount").innerHTML = bitConvert(Math.round(virusCount))
//    document.getElementById("virusValue").innerHTML = bitConvert(virusValue)
//    document.getElementById("virusOutput").innerHTML = bitConvert(virusValue * virusCount)
    document.getElementById("macPrice").innerHTML = bitConvert(macPrice)
    document.getElementById("macTotal").innerHTML = bitConvert(macTotal)
    document.getElementById("macCount").innerHTML = bitConvert(Math.round(macCount))
    document.getElementById("macValue").innerHTML = bitConvert(macValue)
    document.getElementById("macOutput").innerHTML = bitConvert(macValue * macCount)
    document.getElementById("potatoPrice").innerHTML = bitConvert(potatoPrice)
    document.getElementById("potatoTotal").innerHTML = bitConvert(potatoTotal)
    document.getElementById("potatoCount").innerHTML = bitConvert(Math.round(potatoCount))
    document.getElementById("potatoValue").innerHTML = bitConvert(potatoValue)
    document.getElementById("potatoOutput").innerHTML = bitConvert(potatoValue * potatoCount)
    document.getElementById("budgetPrice").innerHTML = bitConvert(budgetPrice)
    document.getElementById("budgetTotal").innerHTML = bitConvert(budgetTotal)
    document.getElementById("budgetCount").innerHTML = bitConvert(Math.round(budgetCount))
    document.getElementById("budgetValue").innerHTML = bitConvert(budgetValue)
    document.getElementById("budgetOutput").innerHTML = bitConvert(budgetValue * macCount)
    document.getElementById("quantumPrice").innerHTML = bitConvert(quantumPrice)
    document.getElementById("quantumTotal").innerHTML = bitConvert(quantumTotal)
    document.getElementById("quantumCount").innerHTML = bitConvert(Math.round(quantumCount))
    document.getElementById("quantumValue").innerHTML = bitConvert(quantumValue)
    document.getElementById("quantumOutput").innerHTML = bitConvert(quantumValue * quantumCount)
    document.getElementById("playtime").innerHTML = Math.floor(playtime / (60 * tick))
    save()
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

  //Deze function slaat playerdata op voor mensen met de html file
  function save() {
    localStorage.setItem("storedBit", bit)
    localStorage.setItem("storedBatPrice", batPrice)
    localStorage.setItem("storedBatPrice", batPrice)
    localStorage.setItem("storedBatCount", batCount)
    localStorage.setItem("storedBatValue", batValue)
    localStorage.setItem("storedBatTotal", batTotal)
    localStorage.setItem("storedApkPrice", apkPrice)
    localStorage.setItem("storedApkCount", apkCount)
    localStorage.setItem("storedApkValue", apkValue)
    localStorage.setItem("storedApkTotal", apkTotal)
    localStorage.setItem("storedJarPrice", jarPrice)
    localStorage.setItem("storedJarCount", jarCount)
    localStorage.setItem("storedJarValue", jarValue)
    localStorage.setItem("storedJarTotal", jarTotal)
    localStorage.setItem("storedExePrice", exePrice)
    localStorage.setItem("storedExeCount", exeCount)
    localStorage.setItem("storedExeValue", exeValue)
    localStorage.setItem("storedExeTotal", exeTotal)
    localStorage.setItem("storedVirusCount", virusCount)
    localStorage.setItem("storedVirusValue", virusValue)
    localStorage.setItem("storedVirusTotal", virusTotal)
    localStorage.setItem("storedMacPrice", macPrice)
    localStorage.setItem("storedMacCount", macCount)
    localStorage.setItem("storedMacValue", macValue)
    localStorage.setItem("storedMacTotal", macTotal)
    localStorage.setItem("storedPotatoPrice", potatoPrice)
    localStorage.setItem("storedPotatoCount", potatoCount)
    localStorage.setItem("storedPotatoValue", potatoValue)
    localStorage.setItem("storedPotatoTotal", potatoTotal)
    localStorage.setItem("storedBudgetPrice", budgetPrice)
    localStorage.setItem("storedBudgetCount", budgetCount)
    localStorage.setItem("storedBudgetValue", budgetValue)
    localStorage.setItem("storedBudgetTotal", budgetTotal)
    localStorage.setItem("storedQuantumPrice", quantumPrice)
    localStorage.setItem("storedQuantumCount", quantumCount)
    localStorage.setItem("storedQuantumValue", quantumValue)
    localStorage.setItem("storedQuantumTotal", quantumTotal)
    localStorage.setItem("storedPlaytime", playtime)
  }

  function restart() {
    bit = 0;
    batPrice = 16;
    batCount = 0;
    batValue = 1;
    batTotal = 0;
    apkPrice = 128;
    apkCount = 0;
    apkValue = 8;
    apkTotal = 0;
    jarPrice = 1024;
    jarCount = 0;
    jarValue = 64;
    jarTotal = 0;
    exePrice = 8192;
    exeCount = 0;
    exeValue = 512;
    exeTotal = 0;
    virusCount = 0;
    virusValue = 512;
    virusTotal = 0;
    macPrice = 268435456;
    macCount = 0;
    macValue = 1;
    macTotal = 0;
    macTimer = 0;
    potatoPrice = 524288;
    potatoCount = 0;
    potatoValue = 1;
    potatoTotal = 0;
    potatoTimer = 0;
    budgetPrice = 4194304;
    budgetCount = 0;
    budgetValue = 1;
    budgetTotal = 0;
    budgetTimer = 0;
    quantumPrice = 41943040;
    quantumCount = 0;
    quantumValue = 1;
    quantumTotal = 0;
    quantumTimer = 0;
    playtime = 0;
    tick = 20;
  }
