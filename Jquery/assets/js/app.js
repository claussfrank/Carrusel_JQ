//$(document).ready(function(){
//alert("Hola");
//});

//$(document).ready(function(){
//    $("button").click(function(){
//        $("#saludo").append("hola son un  saludo");
//    })
//});
//
////function agregarLista(){
////    var node= document.createElement("li");
////    var textnode = document.createTextNode("mas comida");
////    
////    node.appendChild(textnode);
////    document.getElementById("lista").appendChild(node);
////}
//
//$(document).ready(function(){
//    $("#buttonLista").click(function(){
//        $("ul").append("<li>Mas comida con Jquery</li>");
//    })
//})

//function cambiarColor(){
//    document.getElementById("resaltar").style.color= "red";
//}
$(document).ready(function(){
    $("#cambiarColor").click(function(){
        $("#resaltar").css("color","red");
        $("#resaltar").css("background-color","blue");
    })
})