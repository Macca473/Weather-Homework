console.log("test")

var Loc = "Adelaide";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + Loc + ",au&APPID=1566020c66651f6712fd865503112dec";

var locarr = [];

locstrfls = localStorage.getItem("Location array");

for (var locs = 0; locs < locstrfls.length; locs++) {
    
    locstrfls = locstrfls.replace(",","");

}
    
$( ".locns" ).append(locstrfls);

// var locs
// for (locs = 0; locs < locarr.length; locs++) {
   
    
//     console.log(locarr[locs]);
// }


$("#submit").click(function() {
    $(".form-control").html(function() {
        // console.log($(this).val());
        locarr.push("<div>" + $(this).val() + "</div>");
        $( ".locns" ).append("<div>" + $(this).val() + "</div>");
        // console.log(locarr);
        localStorage.setItem("Location array",locarr);
        

        console.log("array " + locarr);
        // localStorage.setItem("Location array", locarr);

    })
  })

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function ajx(response) {
    // console.log(response);
    
});

// var locs
// for (locs = 0; locs < locarr.length; locs++) {
//     console.log(locarr[locs]);
//     $( ".locns" ).append(locarr[locs]);
// }