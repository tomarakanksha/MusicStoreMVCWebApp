namespace MusicStoreAPI.DTO
{
    public class CartDTO
    {
        public long CartID { get; set; }
        public long UserID { get; set; }
        public string AlbumName { get; set; }
        public int Quantity { get; set; }
        public double PriceAfterDiscount { get; set; }
    }
}
