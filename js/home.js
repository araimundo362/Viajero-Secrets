$('#dropdownMenuButton').on("click", () => {
    let menu = $('#horizontalNav');
    let title = $('#homeTitle');
    let main = $('#mainHome');
    if(menu.hasClass("headerIsNotActive")) {
        menu.removeClass("headerIsNotActive");
        menu.addClass("headerIsActive");
        title.addClass("contentIsNotActive");
        main.addClass("contentIsNotActive");
    } else {
        menu.removeClass("contentIsNotActive");
        title.removeClass("contentIsNotActive");
        menu.addClass('headerIsNotActive');
        main.removeClass("contentIsNotActive");
    }
});

$('#modalSuscriptionButton').on("click", () => {
    let modal = $('#suscriptionModal');
    modal.modal('show');
});