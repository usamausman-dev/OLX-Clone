const INITIAL_STATE = {
    users: [
        {
            name: "Usama",
            email: "uusman004@gmail.com"
        },
        {
            name: "Usman",
            email: "usmanali@gmail.com"
        }
    ],
    products: {
        category: 'abc',
        title: 'hello',
        price: '123',
        description: 'hi',
        state: 'pk',
        name: 'mani',
        contact: '1234'
    },
    current_user: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return (
                {
                    ...state,
                    current_user: action.payload
                }
            )

        case "LOGOUT":
            return (
                {
                    ...state,
                    current_user: action.payload
                }
            )

        case "ADD_PRODUCT":
            console.log("Recieved in reducer",action.data)
            return (
                {
                    ...state,
                    products: action.data
                }
            )
        default:
            return state;

    }

}