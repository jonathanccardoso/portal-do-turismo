// Empty JS for your own code to be here

function fonte(e) {
    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    e == 'a' ? fonte++ : fonte--;

    elemento.css("fontSize", fonte);
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_find2
/*

<!DOCTYPE html>
<html>
<body>


<form name="searchForm" action="" method="post" onsubmit="return myFunction()">
  <input type="text" name="search" placeholder="Digite aqui..." id="ageToCheck" value="teatro">
</form>

<p>Value: <span id="demo"></span></p>

<script>
var ages = ['teatro alberto maranhao', 'teatro', 'teatros'];

function checkAdult(age) {
  return age >= document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}
</script>

</body>
</html>


*/
