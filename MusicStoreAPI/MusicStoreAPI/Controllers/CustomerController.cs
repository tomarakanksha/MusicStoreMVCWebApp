using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDL _customer;

        public CustomerController(CustomerDL customer)
        {
            _customer = customer;
        }

        [HttpGet("GetAllCustomers")]
        public IEnumerable<CustomerDTO> GetAllCustomers()
        {
            return _customer.GetAllCustomers();
        }

        [HttpGet("GetCustomerByID")]
        public CustomerDTO GetCustomerByID([FromHeader] int id)
        {
            return _customer.GetCustomerByID(id);
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] RegisterDTO model)
        {
            int status = _customer.RegisterCustomer(model);
            if ( status == 1)
            {
                return Ok("New User Created");
            }
            else if (status == 0)
            {
                return Ok("User already Exist");
            }
            return BadRequest();
        }
    }
}
