export class Customer {
    constructor(
        public customerId:number,
        public fName :string,
        public lName :string,
        public emailId :string,
        public shippingAddr :string,
        public billingAddr :string,
        public customerCategory :string,
        public phone :string,
        public password :string,
    ){}
}
