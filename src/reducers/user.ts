export interface IUser {
    loggedIn: boolean;
}

export interface IUserAction {
    type: 'login';
    data: boolean;
}

function init(): IUser {
    return {
        loggedIn: false,
    }
}

function reducer(store = init(), action: IUserAction): IUser {
    switch (action.type) {
        case 'login':
            return {
                ...store,
                loggedIn: action.data,
            };
        default:
            return store;
    }
}

export default reducer;
