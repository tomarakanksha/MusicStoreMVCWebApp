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

        public CartController(CartDL cartItems)
        {
            _cartItems = cartItems;
        }

        [HttpGet("GetCartItems")]
        public IEnumerable<CartDTO> GetCartItems([FromQuery] int userId)
        {
            return _cartItems.getCartItems(userId);
        }

        [HttpPost("AddToCart")]
        public IActionResult AddToCart(AddToCart model)
        {
            int status = _cartItems.AddItem(model);
            if (status == -1)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpPost("RemoveItem")]
        public IActionResult RemoveItem(long cartId)
        {
            int status = _cartItems.RemoveItem(cartId);
            if (status == -1)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
