export class Login {
    constructor(
        public userId: number,
        public emailId: string,
        public password: string,
        public userType: string,
        public error:string,
        
    ) {}
}