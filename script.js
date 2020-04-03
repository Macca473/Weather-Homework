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

            //////////////////// current day

            $("#wthicn").html(
                    "<img alt=" +
                    response.list[1].weather[0].main +
                    " src=./Images/" + response.list[1].weather[0].icon +
                    "@2x.png width=50 height=50>"
            );

            ////////////////////

                                    //temperature 
            function ftc() {
                var temp = response.list[1].main.temp - 273.15;
                // console.log(temp);
                var tmp2 = Math.round(temp);
                return tmp2;
            };

            $("#temp").html(
                "Temperature: " + ftc() + " C"
            );

            ////////////////////

                                    //humidity
            function hum() {
                var temp = response.list[1].main.humidity;
                return temp;
            };

            $("#humd").html(
                "Humidity: " + hum() + "%"
            );

            ////////////////////

                                    //wind
            function wnd() {
                var temp = response.list[1].wind.speed;
                return temp;
            };

            $("#wind").html(
                "Wind speed: " + wnd()
            );
    


            ////////////////////

            //////////////////// day 2

            $("#1locdate").html(
                response.list[7].dt_txt.substr(8, 2) + "/" +
                response.list[7].dt_txt.substr(5, 2) + "/" +
                response.list[7].dt_txt.substr(0, 4)
            );

            $("#1wthicn").html(
                "<img alt=" +
                response.list[7].weather[0].main +
                " src=./Images/" + response.list[7].weather[0].icon +
                "@2x.png width=50 height=50>"
            );

            ////////////////////

                                //temperature 1
            function ftc1() {
                var temp = response.list[7].main.temp - 273.15;
                // console.log(temp);
                var tmp2 = Math.round(temp);
                return tmp2;
            };

            $("#1temp").html(
                "Temperature: " + ftc1() + " C"
            );

            ////////////////////

                                //humidity 1
            function hum1() {
                var temp = response.list[7].main.humidity;
                return temp;
            };

            $("#1humd").html(
                "Humidity: " + hum1() + "%"
            );

            ////////////////////

                                //wind 1
            function wnd1() {
                var temp = response.list[7].wind.speed;
                return temp;
            };

            $("#1wind").html(
                "Wind speed: " + wnd1()
            );

            ////////////////////

            //////////////////// day 3

            $("#2locdate").html(
                response.list[16].dt_txt.substr(8, 2) + "/" +
                response.list[16].dt_txt.substr(5, 2) + "/" +
                response.list[16].dt_txt.substr(0, 4)
                );
            
                $("#2wthicn").html(
                    "<img alt=" +
                    response.list[16].weather[0].main +
                    " src=./Images/" + response.list[16].weather[0].icon +
                    "@2x.png width=50 height=50>"
                );
            
                ////////////////////
            
                                //temperature 2
                function ftc2() {
                    var temp = response.list[16].main.temp - 273.15;
                    // console.log(temp);
                    var tmp2 = Math.round(temp);
                    return tmp2;
                };
            
                $("#2temp").html(
                    "Temperature: " + ftc2() + " C"
                );
            
                ////////////////////
            
                                //humidity 2
                function hum2() {
                    var temp = response.list[16].main.humidity;
                    return temp;
                };
            
                $("#2humd").html(
                    "Humidity: " + hum2() + "%"
                );
            
                ////////////////////
            
                                //wind 2
                function wnd2() {
                    var temp = response.list[16].wind.speed;
                    return temp;
                };
            
                $("#2wind").html(
                    "Wind speed: " + wnd2()
                );

            //////////////////// day 4

            $("#3locdate").html(
                response.list[24].dt_txt.substr(8, 2) + "/" +
                response.list[24].dt_txt.substr(5, 2) + "/" +
                response.list[24].dt_txt.substr(0, 4)
            );
    
            $("#3wthicn").html(
                "<img alt=" +
                response.list[24].weather[0].main +
                " src=./Images/" + response.list[24].weather[0].icon +
                    "@2x.png width=50 height=50>"
            );
    
            ////////////////////
    
                            //temperature 3
            function ftc3() {
                var temp = response.list[24].main.temp - 273.15;
                // console.log(temp);
                var tmp2 = Math.round(temp);
                return tmp2;
            };
    
            $("#3temp").html(
                "Temperature: " + ftc3() + " C"
            );
    
            ////////////////////
    
                                //humidity 3
            function hum3() {
                var temp = response.list[24].main.humidity;
                return temp;
            };
    
            $("#3humd").html(
                "Humidity: " + hum3() + "%"
            );
    
            ////////////////////
    
                                    //wind 3
            function wnd3() {
                var temp = response.list[24].wind.speed;
                return temp;
            };
    
            $("#3wind").html(
                "Wind speed: " + wnd3()
            );
            //////////////////// day 5

            $("#4locdate").html(
                response.list[32].dt_txt.substr(8, 2) + "/" +
                response.list[32].dt_txt.substr(5, 2) + "/" +
                response.list[32].dt_txt.substr(0, 4)
            );
    
            $("#4wthicn").html(
                "<img alt=" +
                response.list[32].weather[0].main +
                " src=./Images/" + response.list[32].weather[0].icon +
                    "@2x.png width=50 height=50>"
            );
    
            ////////////////////
    
                            //temperature 4
            function ftc4() {
                var temp = response.list[32].main.temp - 273.15;
                // console.log(temp);
                var tmp2 = Math.round(temp);
                return tmp2;
            };
    
            $("#4temp").html(
                "Temperature: " + ftc4() + " C"
            );
    
            ////////////////////
    
                                //humidity 4
            function hum4() {
                var temp = response.list[32].main.humidity;
                return temp;
            };
    
            $("#4humd").html(
                "Humidity: " + hum4() + "%"
            );
    
            ////////////////////
    
                                    //wind 3
            function wnd4() {
                var temp = response.list[32].wind.speed;
                return temp;
            };
    
            $("#4wind").html(
                "Wind speed: " + wnd4()
            );
        });
    });
    

//////////////////////////////////////////////////////////////////////
