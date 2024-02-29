var state = 1;
$("button#navbutton").click(function () {
    if (state <= 0)
        return;
    state -= 3;
    $("button#navbutton").addClass("pressed");
    if (state == -2) {
        $("button#navbutton").addClass("close");
        $("#navigationpart").css({ "--page-rotation": "".concat(2 + Math.random() * 10, "deg"), "--hand-rotation": "".concat(-15 + Math.random() * 30, "deg") }).addClass("active");
    }
    else if (state == -1) {
        $("button#navbutton").removeClass("close");
        $("#navigationpart").removeClass("active");
    }
    setTimeout(function () {
        $("button#navbutton").removeClass("pressed");
        state = Math.abs(state);
    }, 1500);
});
$("button#quitnavigation").click(function () {
    if (state == 2) {
        state -= 3;
        $("button#navbutton").removeClass("close");
        $("#navigationpart").removeClass("active");
        setTimeout(function () {
            $("button#navbutton").removeClass("pressed");
            state = Math.abs(state);
        }, 1500);
    }
});
if (window.location.href.indexOf("fullcpgrid") != -1) {
    $("button#navbutton").click();
    setTimeout(function () {
        $("button#navbutton").click();
    }, 1500);
}
