using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreMVCebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDL _employeeDL;
        public EmployeeController(EmployeeDL employeeDL)
        {
            _employeeDL = employeeDL;
        }

        [HttpGet("GetEmployeeByID")]
        public EmployeeDTO GetEmployeeByID([FromHeader] int id)
        {
            return _employeeDL.GetEmployeeByID(id);
        }

    }
}
