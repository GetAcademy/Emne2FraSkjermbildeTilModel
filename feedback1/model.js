const model = {
    app: {
        currentPage: 'main',
        currentUser: '',
    },
    viewState: {
        registerActivity: {
            title: '',
            description: '',
            category: '',
            time: '',
            difficulty: '',
            place: '',
            participants: '',
            picture: '',
        },
        showActivity: {
            stars: '',
            comments: '',
        },
        sideBar: {
            search: '',
            category: '',
            time: '',
            difficulty: '',
            rank: '',
            place: '',
            participants: '',
        },
    },
    data: {
        users: [
            // favorites = id til dine favoritter
            // activities = id til de du har laget
            // husk annen måte å gjøre kommentar på
            { userID: 1, name: 'Marie', img: '', favorites: [3], activitiesID: [1], },
            { userID: 2, name: 'Bjarne', img: '', favorites: [1], activitiesID: [3], },
        ],
        favorites: [
            { userID: 1, activityID: 3 },
            { userID: 1, activityID: 4 },
            { userID: 2, activityID: 4 },
        ],
        activities: [
            {
                activityID: 1,
                title: 'Klatring i fjell',
                description: 'Ta en tur i fjellet og klatre opp en bratt bakke',
                category: 'Klatring',
                time: '1t30m',
                difficulty: 'moderate',
                place: 'Fjellet',
                participants: null,
                picture: '',
                starAverage: null,
                comments: [
                    { userID: '', comment: '', stars: null, },
                    { userID: '', comment: '', stars: null, },
                ],
            },
        ],
        comments: [
            {
                activityID: 1,
                text: '',
                userID: 1,
                stars: 3,
            },
            {
                text: '',
                userID: 1,
                stars: 3,
            },
        ],
    },
}