$(document).ready(function () {

    const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const imgTypes = ["front_default", "back_default", "front_shiny", "back_shiny"]
    const urlApi = "https://pokeapi.co/api/v2/pokemon/"


    let output = "";

    for (let i = 1; i <= 151; i++) {

        output += "<img src='" + urlImg + i + ".png' id='" + i + "'>";
    }

    $("#pokemons").html(output);


    $("img").click(function () {
        const pokeId = $(this).attr("id");
        if (pokeId == undefined) {
            return false;
        }

        $.get(urlApi + pokeId, function (res) {

            let info = "";
            info += "<h1>" + res.name + "</h1>";
            info += "<ul>";
            info += "   <li>Exp: " + res.base_experience + "</li>"
            info += "   <li>Tipo: ";
            info += "       <ul>"

            for (let i = 0; i < res.types.length; i++) {
                info += "      <li>" + res.types[i].type.name + " </li> ";
            }
            info += "       </ul>";
            info += "   </li>";
            info += "</ul>";


            info += "<div>";
            for (let l = 0; l < imgTypes.length; l++) {
                info += "<img src='" + res.sprites[imgTypes[l]] + "'>";
            }
            info += "</div>";

            $("#info .content").html(info);

            $("#info").show("slow");


        }, "json");
    });

    $("#close").click(function () {
        $("#info").hide("slow");
    });
});