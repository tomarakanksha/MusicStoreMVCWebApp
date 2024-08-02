namespace MusicStoreAPI.DTO
{
    public class AddToCart
    {
        public long AlbumId { get; set; }
        public long OutletId { get; set; }
        public long UserId { get; set; }

        public int Quantity { get; set; }
    }
}
