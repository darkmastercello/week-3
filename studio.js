$(document).ready(function () {
    $("#design").click(function () {
        $("#showdesign").show();
    });
});

$(document).ready(function () {
    $("#design").click(function () {
        $("#showdev").show();
    });
});

$(document).ready(function () {
    $("#design").click(function () {
        $("#showprod").show();
    });
});


var name = document.getElementById("name").value
var btn = document.getElementById("btn")

function showAlert() {
    alert(name + " we have received your message. Thank you for contacting us.")
}
