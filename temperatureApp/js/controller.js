function registerTemperature()
{
    const newRegistration = {
        temperature: model.viewState.registrationPage.temperature,
        date: model.viewState.registrationPage.date,
    };
    model.viewState.registrationPage.temperature = '';
    model.viewState.registrationPage.date = '';
    model.temperatureRegistrations.push(newRegistration);
    model.app.currentPage = 'graph';

    updateView();
}

function goTo(page){
    model.app.currentPage = page;
    updateView();
}