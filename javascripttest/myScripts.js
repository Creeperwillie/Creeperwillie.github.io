function myLoop(){
var start = document.getElementById("startLoop").value;
var end = document.getElementById("endLoop").value;
for(var i = start; i <= end; i++)
  {
    document.write("<p>"+ i + "</p>")
  }
}
