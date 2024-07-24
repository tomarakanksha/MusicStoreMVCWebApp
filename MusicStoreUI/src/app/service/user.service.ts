import {Injectable} from "@angular/core"

@Injectable({
    providedIn: 'root',
  })
export class UserService{
    constructor(){}

    getUserType(){
        if(sessionStorage.getItem("userType") != undefined){
            return sessionStorage.getItem("userType")
        }
        return "I";
    }
}
