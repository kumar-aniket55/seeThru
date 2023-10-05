
const userReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            {
                console.log(localStorage.getItem("username"));
                return {
                    ...state,
                    username: action.payload.username,
                    email: action.payload.email
                }
            }
        case "RESET_USER":
            {
                return {
                    ...state,
                    username: "",
                    email: ""
                }
            }
    }


}

export default userReducer
