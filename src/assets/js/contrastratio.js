$(document).ready(function() { startup(); });

var inputPickerA, inputPickerB;

function luminanceCalc(t, a, r) {
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
        l = parseInt(e[1], 16),
        o = parseInt(e[2], 16),
        c = parseInt(e[3], 16);
    $(a).text(l + ", " + o + ", " + c);
    var n = l / 255,
        u = o / 255,
        i = c / 255;
    if (n <= .03928) var s = n / 12.92;
    else var s = Math.pow((n + .055) / 1.055, 2.4);
    if (u <= .03928) var v = u / 12.92;
    else var v = Math.pow((u + .055) / 1.055, 2.4);
    if (i <= .03928) var x = i / 12.92;
    else var x = Math.pow((i + .055) / 1.055, 2.4);
    var p = .2126 * s + .7152 * v + .0722 * x;
    return $(r).text(p.toFixed(4)), p
}

function contrastCalc() {
    if (window.rgbLumX > window.rgbLumY) var t = ((window.rgbLumX + .05) / (window.rgbLumY + .05)).toFixed(2);
    else var t = ((window.rgbLumY + .05) / (window.rgbLumX + .05)).toFixed(2);
    $("#contrast-val").text(t), t >= 4.5 ? ($("#normal-val-aa").text("Pass").css("color", "#006811"), $("#large-val-aaa").text("Pass").css("color", "#006811")) : ($("#normal-val-aa").text("Fail").css("color", "#EB0000"), $("#large-val-aaa").text("Fail").css("color", "#EB0000")), t >= 3 ? $("#large-val-aa").text("Pass").css("color", "#006811") : $("#large-val-aa").text("Fail").css("color", "#EB0000"), t >= 7 ? $("#normal-val-aaa").text("Pass").css("color", "#006811") : $("#normal-val-aaa").text("Fail").css("color", "#EB0000"), window.rgbLumX > .5 ? $("#input-picker-a").css("color", "#333333") : $("#input-picker-a").css("color", "#ffffff"), window.rgbLumY > .5 ? $("#input-picker-b").css("color", "#333333") : $("#input-picker-b").css("color", "#ffffff")
}

function startup() {
    (inputPickerA = document.querySelector("#input-picker-a")).addEventListener("input", updateFirstA, !1), inputPickerA.addEventListener("change", updateAllA, !1), (inputPickerB = document.querySelector("#input-picker-b")).addEventListener("input", updateFirstB, !1), inputPickerB.addEventListener("change", updateAllB, !1)
}

function updateFirstA(t) {
    var a = t.target.value;
    $("#input-text-a").val(a), $("#box-color-target-a").css("background-color", a), $("#hex-color-a-left").text(a), $("#box-color-target-b").css("color", a), $("#hex-color-a-right").text(a), window.rgbLumX = luminanceCalc(a, "#rgb-val-X", "#lum-val-X"), contrastCalc()
}

function updateAllA(t) {
    var a = t.target.value;
    $("#input-text-a").val(a)
}

function updateFirstB(t) {
    var a = t.target.value;
    $("#input-text-b").val(a), $("#box-color-target-b").css("background-color", a), $("#hex-color-b-right").text(a), $("#box-color-target-a").css("color", a), $("#hex-color-b-left").text(a), window.rgbLumY = luminanceCalc(a, "#rgb-val-Y", "#lum-val-Y"), contrastCalc()
}

function updateAllB(t) {
    var a = t.target.value;
    $("#input-text-b").val(a)
}

function textUpdateColorA() {
    var t = $("#input-text-a").val();
    $("#box-color-target-a").css("background-color", t), $("#hex-color-a-left").text(t), $("#box-color-target-b").css("color", t), $("#hex-color-a-right").text(t), $("#input-picker-a").val(t), window.rgbLumX = luminanceCalc(t, "#rgb-val-X", "#lum-val-X"), contrastCalc()
}

function textUpdateColorB() {
    var t = $("#input-text-b").val();
    $("#box-color-target-b").css("background-color", t), $("#hex-color-b-right").text(t), $("#box-color-target-a").css("color", t), $("#hex-color-b-left").text(t), $("#input-picker-b").val(t), window.rgbLumY = luminanceCalc(t, "#rgb-val-Y", "#lum-val-Y"), contrastCalc()
}

function addHash(t) {
    var a = t.value;
    a.match(/^#/) || (t.value = "#" + a)
}

function hexConvert(t) {
    var a = t.value.substring(1);
    3 === a.length && (a = a.split("").map(function(t) {
        return t + t
    }).join(""), t.value = "#" + a)
}
window.rgbLumX = .1635, window.rgbLumY = .9255, $(document).ready(contrastCalc()), window.addEventListener("load", startup, !1);