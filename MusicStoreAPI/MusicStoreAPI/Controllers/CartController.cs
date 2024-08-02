using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;
using System.Text.Json;

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
        public IActionResult RemoveItem([FromBody] JsonElement requestBody)
        {
            if (requestBody.ValueKind != JsonValueKind.Object)
            {
                return BadRequest("Invalid request body format");
            }

            if (!requestBody.TryGetProperty("cartId", out JsonElement cartIdElement))
            {
                return BadRequest("cartId is missing from the request body");
            }

            if (!cartIdElement.TryGetInt64(out long cartId))
            {
                return BadRequest("Invalid cartId format");
            }

            int status = _cartItems.RemoveItem(cartId);
            if (status == -1)
            {
                return BadRequest();
            }

            return Ok();
            
        }

    }
}
