using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreMVCebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private UserClassDL _userClassDL;

        public HomeController(UserClassDL userClassDL)
        {
            _userClassDL= userClassDL;
        }

        [HttpPost("Authenticate")]
        public SignInDTO Authenticate(SignInDTO model)
        {
            model = _userClassDL.ValidateUser(model);
            return model;
        }

    }
}
