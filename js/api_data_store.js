"use strict";
const buildFamilyTree = () => {
    /*--------------------------*/
    /*- window.location object -*/
    /*--------------------------*/
    let colorSchemes = [
        "css/colorscheme/black-on-pink.css",
        "css/colorscheme/black-on-tan.css",
        "css/colorscheme/white-on-red.css"
    ];
    $("#color-switcher").attr("href", colorSchemes[1]);
    /*---------------------*/
    /*- Set Tribute Title -*/
    /*---------------------*/
    $("#title-1").html("Api Data Store Server");
    $("#family-tree").show(2000);
    $("footer").show(3000);
    $("#copyright-1").show(3000);
    $("#copyright-2").show(3500);
    $("#server-type").show(3500);
    $("#company-name").show(4000);
}; //end buildFamilyTree ()=> function. . .

//********************************
//*- Document Ready Processing  -*
//********************************
$(document).ready(() => {

    var today = new Date();
    $("#copyright-1").html("&copy; Copyright " + today.getFullYear());

    buildFamilyTree();
                          
    $("footer").hover(function() {
        $("#copyright-1").effect("shake");
        }, function() {
        $("#server-type").effect("shake");
    });

});
