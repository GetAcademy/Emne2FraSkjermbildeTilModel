const model = {
    app: { // del 1 - overordnet view state
        currentPage: 'registration', // 'graph',
        //currentUser: 'terje', // null
    },
                 // dette er "inputs"
    viewState: { // del 2 - view state per side
        registrationPage: {
            temperature: '',
            date: '',
        },
        graphPage: {
            fromDate: '',
            toDate: '',
        },
    },     
    // del 3 - app state - selve dataene
    temperatureRegistrations: [
        { temperature: 10, date: '2025-10-01'},
        { temperature: 11, date: '2025-09-30'},
        { temperature: 12, date: '2025-09-29'},
    ],
};