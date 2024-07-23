namespace MusicStoreAPI.DTO
{
    public class CustomerDTO
    {
        public long CustomerId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string EmailId { get; set; }
        public string ShippingAddr { get; set; }
        public string BillingAddr { get; set; }
        public string CustomerCategory { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
    }
}
