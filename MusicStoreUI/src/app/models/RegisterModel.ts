export class RegisterModel {
  constructor (
    public fName: string,
    public lName: string,
    public emailID: string,
    public password: string,
    public phone: string,
    public shippingAddr?: string,
    public billingAddr?: string,
    public customerCategory?: string,
    public idUpload?: string
  ) {}
    
  }
