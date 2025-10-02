const model = {
    app: { // del 1 - overordnet view state
        currentPage: 'graph', // 'graph',
        //currentUser: 'terje', // null
    },
                 // dette er "inputs"
    viewState: { // del 2 - view state per side
        registrationPage: {
            temperature: '',
            date: '',
        },
        graphPage: {
            fromDate: '2025-09-15',
            toDate: '2025-10-15',
        },
    },     
    // del 3 - app state - selve dataene
    temperatureRegistrations: [
        { temperature: 9, date: '2025-11-01'},
        { temperature: 10, date: '2025-10-01'},
        { temperature: 11, date: '2025-08-30'},
        { temperature: 12, date: '2025-09-29'},
    ],
};