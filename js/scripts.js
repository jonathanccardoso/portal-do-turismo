// Empty JS for your own code to be here

function fonte(e) {
    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    e == 'a' ? fonte++ : fonte--;

    elemento.css("fontSize", fonte);
}

//search
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_find2
