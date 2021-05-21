

// Inputs control checkers

const nameControl = (name) => {
    return name.length > 0;
}

const emailControl = (email) => {
    return email.length > 0 && email.includes("@");
}

const asesoriaControl = (asesoriaValue) => {
    return asesoriaValue == 'PERSONALIZADA' || asesoriaValue == 'REDES';
}

const dateControl = (date) => {
    return date.length > 0;
}


$('#modalAsRedes').on("click", () => {
    let modalRedes = $('#modalAsesoriaRedes');
    modalRedes.modal('show');
})

$('#modalAsViajesPer').on("click", () => {
    let modalViajes = $('#modalAsesoriaPersonalizada');
    modalViajes.modal("show");
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

//https://mandrillapp.com/api/1.0/ 