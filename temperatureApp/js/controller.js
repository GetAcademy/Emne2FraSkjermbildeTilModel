function registerTemperature() {
    // Flere måter å kopiere et objekt på
    // 1: 
    const newRegistration = {
        temperature: model.viewState.registrationPage.temperature,
        date: model.viewState.registrationPage.date,
    };
    // 2: 
    //const newRegistration = structuredClone(model.viewState.registrationPage);  
    // 3: 
    // const newRegistration = {...model.viewState.registrationPage.temperature};
    // model.viewState.registrationPage.temperature = '';
    // model.viewState.registrationPage.date = '';
    model.temperatureRegistrations.push(newRegistration);
    model.app.currentPage = 'graph';

    updateView();
}

function goTo(page) {
    model.app.currentPage = page;
    updateView();
}
