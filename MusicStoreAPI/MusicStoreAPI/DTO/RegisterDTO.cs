namespace MusicStoreAPI.DTO
{
    public class RegisterDTO
    {
        public string FName { get; set; }
        public string LName { get; set; }
        public string Emailid { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }

        public string ShippingAddr { get; set; }
        public string BillingAddr { get; set; }
        public string CustomerCategory { get; set; }
        public string IdUpload { get; set; } = "";

    }
}