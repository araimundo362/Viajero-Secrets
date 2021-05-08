$('#modalAsRedes').on("click", () => {
    let modalRedes = $('#modalAsesoriaRedes');
    modalRedes.modal('show');
})

$('#modalAsViajesPer').on("click", () => {
    let modalViajes = $('#modalAsesoriaPersonalizada');
    modalViajes.modal("show");
})

$('#submitButton').on("click", () => {
    let name = $('#nameAsesoriaInput'); //string
    let email = $('#emailAsesoriaInput'); // string
    let meet = $('#meetAsesoriaInput'); 
    let asesoria = $('#asesoriaSelect'); // PERSONALIZADA -- REDES
    let date = $('#dateAsesoriaInput'); //2021-05-08 type string

    if (name.val().length == 0) {
        name.css("border-color", "red")
    }
    if (email.val().length == 0 || !email.val().includes('@')) {
        email.css("border-color", "red");
    }
    if (asesoria.val() !== 'PERSONALIZADA' || asesoria.val() !== 'REDES') {
        asesoria.css("border-color", "red");
    }
    if (date.val().length == 0) {
        date.css("border-color", "red");
    }

    // Consultar opcion para enviar mail
})