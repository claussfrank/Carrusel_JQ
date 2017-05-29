// almacenar  una slider  en una  variable 
var slider = $("#slider");
//almacenamos  los  botones 
var siguiente = $("#btn-next");
var anterior= $("#btn-prev");

$("#slider section:last").insertBefore("#slider section:first");