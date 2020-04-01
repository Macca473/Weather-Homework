console.log("test")


var locarr = [];



locstrfls = localStorage.getItem("Location array");

for (var locs = 0; locs < locstrfls.length; locs++) {
    
    locstrfls = locstrfls.replace(",","");
}
    
$( ".locns" ).append(locstrfls);

$("#submit").click(function() {
    $(".form-control").html(function() {
        // console.log($(this).val());
        locarr.push("<div>" + $(this).val() + "</div>");
        $( ".locns" ).append("<div>" + $(this).val() + "</div>");
        // console.log(locarr);
        localStorage.setItem("Location array",locarr);
    })

        // console.log($(".form-control").val());

        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + $(".form-control").val() + "&APPID=1566020c66651f6712fd865503112dec";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function ajx(response) {
            console.log(response.list[0].dt_txt);

            $("#locdate").html(
                    $(".form-control").val() + " " +
                    response.list[0].dt_txt.substr(8, 2) + "/" +
                    response.list[0].dt_txt.substr(5, 2) + "/" +
                    response.list[0].dt_txt.substr(0, 4)
            );

            // console.log(response.list[1].weather[0].icon);

            // console.log(response.list[1].weather[0].main);

            // console.log("<img alt=" + response.list[1].weather[0].main + " src=./Images/" + response.list[1].weather[0].icon + "@2x.png width=50 height=50>");

            $("#wthicn").html(
                    "<img alt=" +
                    response.list[1].weather[0].main +
                    " src=./Images/" + response.list[1].weather[0].icon +
                    "@2x.png width=50 height=50>"
            );

            // 273.15

            // console.log(response.list[1].main.temp)

            function ftc() {
                var temp = response.list[1].main.temp - 273.15;
                console.log(temp);
                return temp;
            }

            $("#temp").html(
                "temperature: " + ftc()
            );
    
        });

        })

//////////////////////////////////////////////////////////////////////

