/*jslint browser: true*/
/*global $, jQuery, TweenMax, TimelineMax, Power4*/
/* jslint expr: true */


/* ============================= SCROLL ANIMATION HOUSE ================================ */
    
var revealElements = document.getElementsByClassName("digit");
for (var i=0; i<revealElements.length; i++) {
new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 0.9,
})
.setClassToggle(revealElements[i], "visible")
.addIndicators({name: "digit " + (i+1) })
.addTo(controller);
}

/* ============================= SCROLL ANIMATION NUMBERS ================================ */

var revealNum = document.getElementsByClassName("revealNumber");
for (var i=0; i<revealNum.length; i++) {
new ScrollMagic.Scene({
    triggerElement: revealNum[i],
    offset: 50,
    triggerHook: 0.9,
    })
.setClassToggle(revealNum[i], "visible")
.addIndicators({name: "revealNumber " + (i+1) })
.addTo(controller);
}

/* ============================= SCROLL ANIMATION VALEURS ================================ */

new ScrollMagic.Scene({
    triggerElement: "#valeurs",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50
})
.setClassToggle(".revealItem", "visible")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#qualifications",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50
})
.setClassToggle(".revealCard", "visible")
.addIndicators()
.addTo(controller);

/* ============================= DROPDOWN LIST ================================ */

function slideMenu() {
    $(".climList").toggleClass("visible");
}
function dropMenu() {
    $(".chauf_list").toggleClass("visible");
}

function downMenu() {
    $(".vent_list").toggleClass("visible");
}

$(".dropClim").click(function () {
    slideMenu();
});

$(".dropChauf").click(function () {
    dropMenu();
});

$(".dropVent").click(function () {
    downMenu();
});




$("#scrollTop").click(function(){
    $("body,html").animate(
        {
            scrollTop : 0
        }, 400);
});