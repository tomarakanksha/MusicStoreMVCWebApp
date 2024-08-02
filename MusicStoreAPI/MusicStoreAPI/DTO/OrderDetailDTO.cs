namespace MusicStoreAPI.DTO
{
    public class OrderDetailDTO
    {

        public long OrderId { get; set; }
        public string OrderNum { get; set; }
        public string BillingAddr { get; set; }
        public string ShippingAddr { get; set; }
        public string AlbumName { get; set; }
        public double Price { get; set; }
    }
}
