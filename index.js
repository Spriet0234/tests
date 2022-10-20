document.getElementById("myButton").onclick = function(){

    var total = document.getElementById("myText1").value;
    var dtotal = document.getElementById("myText2").value;
    var fee = document.getElementById("myText3").value;

    if(fee !== ""){
    total = parseFloat(total)+parseFloat(fee);
    }
    console.log(total);
    var result = dtotal/1.0825 - total;
    console.log(Math.abs(result.toFixed(2)));
    result = Math.abs(result.toFixed(2));
    document.getElementById("result").innerHTML = result;
}