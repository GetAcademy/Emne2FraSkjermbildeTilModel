function updateView() {
    const page = model.app.currentPage;
    if (page == 'registration') updateViewRegistration();
    else if (page == 'graph') updateViewGraph();
}

function updateViewRegistration() {
    document.getElementById('app').innerHTML = /*HTML*/`

        <h2>Registreringsside</h2>
        Temperatur<br/>
        <input 
            type="number"
            oninput="model.viewState.registrationPage.temperature = this.valueAsNumber"
            value="${model.viewState.registrationPage.temperature}"
            /><br/>
        Dato<br/>
        <input 
            type="date"
            oninput="model.viewState.registrationPage.date = this.value"
            value="${model.viewState.registrationPage.date}"
            /><br/>

        <button onclick="registerTemperature()">Registrer</button>
    `;
}

function updateViewGraph() {
    let html = '';
    for(let temperatureRegistration of model.temperatureRegistrations){
        html += /*HTML*/`
            <li>
                ${temperatureRegistration.temperature}
                ${new Date(temperatureRegistration.date).toLocaleDateString()}
            </li>
        `;
    }
    document.getElementById('app').innerHTML = /*HTML*/`
        <h2>Graf-side</h2>
        <ul>
            ${html}
        </ul>

        <button onclick="goTo('registration')">Ny registrering</button>
    `;
}