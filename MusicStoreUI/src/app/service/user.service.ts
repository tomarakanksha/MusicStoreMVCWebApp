import {Injectable} from "@angular/core"

@Injectable({
    providedIn: 'root',
  })
export class UserService{
    constructor(){}

    getUserType(){
        return sessionStorage.getItem("userType") || "I";
    }
}
