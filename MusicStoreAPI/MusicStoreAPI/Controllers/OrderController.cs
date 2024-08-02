using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderDL _order;

        public OrderController(OrderDL order)
        {
            _order = order;
        }

        [HttpPost("CreateOrder")]
        public IActionResult CreateOrder(OrderItemsDTO model)
        {
            string orderNum = "";
            long orderid = _order.CreateOrder(model,out orderNum);
            if (orderid == -1)
            {
                return BadRequest();
            }
            return Ok(new { OrderId = orderid, OrderNum = orderNum });
        }

        [HttpPost("CompleteOrder")]
        public IActionResult CompleteOrder([FromHeader] long orderId, [FromHeader] string paymentMode)
        {
            int status = _order.CompleteOrder(orderId, paymentMode);
            if (status == 1)
            {
                return Ok();
            }
            return BadRequest("Payment Failed.");
        }

        [HttpGet("GetOrderSummary")]
        public IList<OrderDetailDTO>  GetOrderSummary([FromQuery] int orderid)
        {
            IList<OrderDetailDTO> list = _order.GetOrderSummary(orderid);
            return list;
        }
    }
}
