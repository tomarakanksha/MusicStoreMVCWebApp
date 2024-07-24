export class RegisterModel {
  constructor (
    public FName: string,
    public LName: string,
    public emailID: string,
    public Password: string,
    public Phone: string,
    public UserType: string,
    public ShippingAddr?: string,
    public BillingAddr?: string,
    public CustomerCategory?: string,
    public idUpload?: string
  ) {}
    
  }
