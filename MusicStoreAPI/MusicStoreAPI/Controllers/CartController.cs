using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private readonly CartDL _cartItems;

        public CartController(CartDL customer)
        {
            _cartItems = customer;
        }

        [HttpGet("GetCartItems")]
        public IEnumerable<CartDTO> GetCartItems([FromHeader] int userId)
        {
            return _cartItems.getCartItems(userId);
        }
    }
}
