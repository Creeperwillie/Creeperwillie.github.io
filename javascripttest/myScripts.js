function myLoop(){
var start = document.getElementById("startLoop").value;
var end = document.getElementById("endLoop").value;
var count = document.getElementById("countLoop").value;
  
  start = Number(start);
  end = Number(end);
  count = Number(count);
  
for(var i = start; i <= end; i+= count)
  {
    document.write("<p>"+ i + "</p>")
  }
}
