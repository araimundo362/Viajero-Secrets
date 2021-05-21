
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

$('#submitButton').on("click", async () => {
    let name = $('#nameAsesoriaInput'); //string
    let email = $('#emailAsesoriaInput'); // string
    let meet = $('#meetAsesoriaInput'); 
    let asesoria = $('#asesoriaSelect'); // PERSONALIZADA -- REDES
    let date = $('#dateAsesoriaInput'); //2021-05-08 type string

    if (!nameControl(name.val())) {
        name.css("border-color", "red")
    }
    if (!emailControl(email.val())) {
        email.css("border-color", "red");
    }
    if (!asesoriaControl(asesoria.val())) {
        asesoria.css("border-color", "red");
    }
    if (!dateControl(date.val())) {
        date.css("border-color", "red");
    }

    if (nameControl(name.val()) && emailControl(email.val()) && asesoriaControl(asesoria.val()) && date.val()) {
        console.log('Se ejecuta esto ?//?')
        
        let payload =   {
            "apikey": "f40f10cc58334e1ae829fec416fcfe9d-us7",
            "email": {
              "email": "araimundo362@gmail.com"
            },
            "send_welcome": false
          };
          payloadString = JSON.stringify(payload);
          let options = {
            method: "post",
            contentType: "application/json", // contentType property was mistyped as ContentType - case matters
            payload: payloadString
          }

          
          let result = UrlFetchApp.fetch("https://us7.api.mailchimp.com/2.0/lists/subscribe.json", options);
          console.log('result', result);
    }
    // Consultar opcion para enviar mail
})