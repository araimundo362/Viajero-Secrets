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
    document.querySelectorAll('im')
    let title = $('#homeTitle');
    if(menu.hasClass("hide")) {
        menu.removeClass("hide");
        title.addClass("hide")
    } else {
        menu.addClass("hide");
        title.removeClass("hide");
    }
})

$('#modalSuscriptionButton').on("click", () => {
    let modal = $('#suscriptionModal');
    modal.modal('show');
})

$('#nameInput').on("blur", () => {
    let name = $('#nameInput');
    if (name.val().length > 3) {
        name.addClass('successInput')
    }
})

$('#emailInput').on("blur", () => {
    let email = $('#emailInput');
    if (email.val().includes("@")) {
        email.addClass('successInput');
    }
})

$("#meetInput").on("blur", () => {
    let meet = $("#meetInput");
    if (meet.val().length > 0) {
        meet.addClass('successInput');
    }
})