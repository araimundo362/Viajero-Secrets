$(() => {

    $(window).on("scroll", () => {

        if ($(window).scrollTop() > 100) {
            $('#header').css("background-color", "dodgerblue")
        } else {
            $('#header').css("background-color", "transparent")
        }
    })
})

$('#dropdownMenuButton').on("click", () => {
    let menu = $('#horizontalNav');
    let title = $('#homeTitle');
    if(menu.hasClass("hide")) {
        menu.removeClass("hide");
        title.addClass("hide")
    } else {
        menu.addClass("hide");
        title.removeClass("hide");
    }
})