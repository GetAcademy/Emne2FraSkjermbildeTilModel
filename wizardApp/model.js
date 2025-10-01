const model = {
    app: { // del 1 - overordnet view state
        currentPage: '', // '',
        //currentUser: 'terje', // null
    },
    // dette er "inputs"
    viewState: { // del 2 - view state per side
        answer: {
            gender: '',
            age: '',
            color: '',
        }
    },

    // del 3 - app state - selve dataene
    answers: [
        { gender: 'm', age: 22, color: 'grønn', },
    ],
};