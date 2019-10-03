$(document).ready(function () {
    $(".countdown-holder").hide();
    $("#launch_div").hide();
    setTimeout(function () { $(".countdown-holder").show(); }, 900);
    var launchDate = new Date('Oct 27, 2019 00:00:00').getTime();
    var distance = setInterval(function () {
        var now = new Date().getTime();
        var difference = launchDate - now;
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
        $("#days").html(("0" + days).slice(-2));
        $("#hours").html(("0" + hours).slice(-2));
        $("#minutes").html(("0" + minutes).slice(-2));
        $("#seconds").html(("0" + seconds).slice(-2));
        if (difference < 0) {
            console.log("here");
            clearInterval(distance);
            $(".countdown-holder").css("display", "none");
            $(".countdown-holder").hide();
            $(".begins").hide();
            $("#launch_div").show();
        }
    }, 1000);
});