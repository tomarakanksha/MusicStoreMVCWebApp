export class User{
    constructor (
        public  UserId :number,
        public FName: string,
        public LName : string,
        public EmailID : string,
        public Password: string,
        public Phone : string,
        public  UserType : string,
        public  LastLogin : string,

        public  PwdLastUpdated : string,

        public Active :boolean,
    ){}
}
