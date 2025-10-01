const model = {
    app: { // del 1 - overordnet view state
        currentPage: '', // '',
        //currentUser: 'terje', // null
    },
    // dette er "inputs"
    viewState: { // del 2 - view state per side
        addContactPage: {
            name: '',
            phone: '',
            email: '',
        },
        editContactPage: {
            name: '',
            phone: '',
            email: '',
        },
        contactsPage: {
            search: '',
        }
    },

    // del 3 - app state - selve dataene
    contacts: [
        { name: 'John Doe', email: 'john@mail.com', phone: '123-456-7890' },
        { name: 'Jane Smith', email: 'janehn@mail.com', phone: '987-654-3210' },
    ],
};