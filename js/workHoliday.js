let paises = ['Argentina', 'Chile', 'Colombia', 'Ecuador', 'España', 'Mexico', 'Peru', 'Uruguay'];

let paisesArgentina= ['Alemania', 'Australia', 'Austria', 'Corea del sur', 'Dinamarca', 'España', 'Francia', 'Hungria', 'Irlanda', 'Japon', 'Mexico', 'Noruega', 'Nueva Zelanda', 'Paises Bajos', 'Polonia', 'Portugal', 'Suecia'];
let paisesChile = ['Alemania', 'Australia', 'Austria', 'Canada', 'Corea del sur', 'Dinamarca', 'Francia', 'Hungria', 'Irlanda', 'Japon', 'Mexico', 'Nueva Zelanda', 'Polonia', 'Portugal', 'Suecia'];
let paisesColombia = ['Francia'];
let paisesEcuador = ['Australia'];
let paisesEspana = ['Australia', 'Nueva Zelanda'];
let paisesMexico = ['Francia', 'Nueva Zelanda'];
let paisesPeru = ['Australia', 'Francia', 'Nueva Zelanda'];
let paisesUruguay = ['Alemania', 'Australia', 'Mexico', 'Francia', 'Nueva Zelanda', 'Paises Bajos', 'Suecia'];


let modalCountries = ``
let botonera = ``;

const setModalCountry = (pais) => {
    botonera = ``;
    switch (pais) {
        case 'Argentina':
            for(let i=0; i < paisesArgentina.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesArgentina[i].toLowerCase()}-para-argentina/" target="_blank">${paisesArgentina[i]}</a></button>`
            }
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
            break;
        case 'Chile':
            for(let i=0; i < paisesChile.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesChile[i].toLowerCase()}-para-chile/" target="_blank">${paisesChile[i]}</a></button>`
            }
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header modalCountry__header">
                  <h5 class="modal-title" id="title">${pais}</h5>
                  <div class="modalCountry__line"></div>
                </div>
                <div id="modalBody" class="modal-body modalCountry">
                ${botonera}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
            `;
            break;
        case 'Colombia':
            for(let i=0; i < paisesColombia.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesColombia[i].toLowerCase()}-para-colombia/" target="_blank">${paisesColombia[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        case 'Ecuador':
            for(let i=0; i < paisesEcuador.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesEcuador[i].toLowerCase()}-para-ecuador/" target="_blank"> ${paisesEcuador[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        case 'España':
            for(let i=0; i < paisesEspana.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesEspana[i].toLowerCase()}-para-espana/" target="_blank">${paisesEspana[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        case 'Mexico':
            for(let i=0; i < paisesMexico.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesMexico[i].toLowerCase()}-para-mexico/" target="_blank">${paisesMexico[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        case 'Peru':
            for(let i=0; i < paisesPeru.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesPeru[i].toLowerCase()}-para-peru/" target="_blank">${paisesPeru[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        case 'Uruguay':
            for(let i=0; i < paisesUruguay.length; i++) {
                botonera += `<button type="button" class="btn btn-secondary modalCountry__button"><a href="https://viajerosecretscom.wordpress.com/${paisesUruguay[i].toLowerCase()}-para-uruguay/" target="_blank">${paisesUruguay[i]}</a></button>`
            };
            modalCountries += `
            <div class="modal fade" id="modal${pais}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header modalCountry__header">
                      <h5 class="modal-title" id="title">${pais}</h5>
                      <div class="modalCountry__line"></div>
                    </div>
                    <div id="modalBody" class="modal-body modalCountry">
                    ${botonera}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            break;
        default: 
            console.log('error, ver que hacer');
            break;
    }
    $('#modalCountries').html(modalCountries);
    $(`#modal${pais}`).modal('show');
}

let buttons = ``
for(let i=0; i < paises.length ; i++) {
    buttons += `<button onclick=setModalCountry(paises[${i}]) type="button" data-toggle="modal" data-target="#modalPais" class="btn btn-secondary btn-lg workHolidayMain__countryButtonsContainer__buttons__countryButton">${paises[i]}</button>`
}

$('#countryButtons').html(buttons);


