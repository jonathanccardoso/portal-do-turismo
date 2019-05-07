// Empty JS for your own code to be here

function fonte(e) {
    var elemento = $(".acessibilidade");
    var fonte = parseInt(elemento.css('font-size'));

    e == 'a' ? fonte++ : fonte--;

    elemento.css("fontSize", fonte);
}

//search
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_find2
/*
    <!-- <form name="searchForm" action="" method="post" onsubmit="return search()">
        <input type="text" name="search" placeholder="Digite aqui..." id="search" value="teatro">
    </form>

    <p>Value: <span id="valueSearch"></span></p>

    <script>
        var names = ['teatro', 'teatros'];

        //var ages = [4, 12, 16, 20];

        function checkSearch(name) {
            if (name == document.getElementById("search").value) {
                //return window.location.href = "http://www.devmedia.com.br/guia/javascript/34372";
                return name == document.getElementById("search").value;
            }
            //message error or focus in input form
        }

        function search() {
            //var textSearch = document.forms["searchForm"]["search"].value;
            document.getElementById("valueSearch").innerHTML = names.find(checkSearch);
        }

    </script> -->*/
