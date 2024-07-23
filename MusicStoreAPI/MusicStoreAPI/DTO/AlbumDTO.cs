namespace MusicStoreAPI.DTO
{
    public class AlbumDTO
    {
        public long AlbumId { get; set; }
        public string AlbumName { get; set; }
        public long OutletID { get; set; }
        public string OutletName { get; set; }
        public double Discount { get; set; }
        public double PriceAfterDiscount { get; set; }

    }
}
