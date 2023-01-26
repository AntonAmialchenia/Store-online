import { makeAutoObservable } from "mobx"

export type User = {
    id: number
    email: string
    password: string
    role:string
}


export default class UserStore {

    _isAuth: boolean
    _user: User


    constructor() {
        this._isAuth = false
        this._user = {
            id: 0,
            email: '',
            password: '',
            role:'',
        }
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean) {
        this._isAuth =bool
    }
    setUser(user: User) {
        this._user = user
    }

    get isAuth():boolean {
        return this._isAuth
    }
    get user(): User {
        return this._user
    }
}