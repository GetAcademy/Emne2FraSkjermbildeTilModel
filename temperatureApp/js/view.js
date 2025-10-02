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
    let temperatureRegistrations = model.temperatureRegistrations;
    if (model.viewState.graphPage.fromDate && model.viewState.graphPage.toDate) {
        temperatureRegistrations = filterTemperatureRegistrations();
    }
    let html = '';
    for (let temperatureRegistration of temperatureRegistrations) {
        html += /*HTML*/`
            <li>
                ${temperatureRegistration.temperature}°C registrert
                ${new Date(temperatureRegistration.date).toLocaleDateString()}
            </li>
        `;
    }
    document.getElementById('app').innerHTML = /*HTML*/`
        <h2>Graf-side</h2>
        Fra <br/>
        <input 
            type="date"
            oninput="model.viewState.graphPage.fromDate=this.value"
            value="${model.viewState.graphPage.fromDate}"
            /><br/>
        Til <br/>
        <input 
            type="date"
            oninput="model.viewState.graphPage.toDate=this.value"
            value="${model.viewState.graphPage.toDate}"
            /><br/>
        <button onclick="updateView()">Oppdater</button>
        <ul>
            ${html}
        </ul>

        <button onclick="goTo('registration')">Ny registrering</button>
    `;
}

function filterTemperatureRegistrations() {
    const temperatureRegistrations = [];
    for (let registration of model.temperatureRegistrations) {
        if (registration.date >= model.viewState.graphPage.fromDate
            && registration.date <= model.viewState.graphPage.toDate) {
            temperatureRegistrations.push(registration);
        }
    }
    return temperatureRegistrations;
}

// Til inspirasjon for spesielt interesserte
function filterTemperatureRegistrations2() {
    return model.temperatureRegistrations.filter(isBetweenFromAndTo);
}

function isBetweenFromAndTo(registration) {
    return registration.date >= model.viewState.graphPage.fromDate
        && registration.date <= model.viewState.graphPage.toDate;
}

function filterTemperatureRegistrations3() {
    return model.temperatureRegistrations.filter(registration =>
        registration.date >= model.viewState.graphPage.fromDate
        && registration.date <= model.viewState.graphPage.toDate
    );
}