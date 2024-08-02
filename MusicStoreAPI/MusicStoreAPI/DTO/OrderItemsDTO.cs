namespace MusicStoreAPI.DTO
{
    public class OrderItemsDTO
    {
        public long UserId { get; set; }
        public IList<CartDTO> CartItemsList { get; set; }
        

    }
}
