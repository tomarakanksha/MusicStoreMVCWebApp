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
    }
}
