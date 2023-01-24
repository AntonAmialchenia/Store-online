import { makeAutoObservable } from "mobx"

// type User = {
//     id: number
//     email: string
//     password: string
//     role:string
// }


export default class UserStore {

    _isAuth: boolean
    _user: {}


    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth =bool
    }
    setUser(user: {}) {
        this._user = user
    }

    get isAuth():boolean {
        return this._isAuth
    }
    get user(): {} {
        return this._user
    }
}