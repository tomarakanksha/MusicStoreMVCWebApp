using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MusicStoreAPI.DTO
{
    public class SignInDTO
    {
        public Int64 UserId { get; set; } = 0;

        [Required(ErrorMessage = "Required.")]
        [EmailAddress]
        [Display(Description = "EMAIL ID")]
        public string EmailId { get; set; }

        [Required(ErrorMessage = "Required.")]
        [Length(5, 9)]
        [Display(Description = "PASSWORD")]
        public string Password { get; set; }

        public string UserType { get; set; } = "I";

        public string Error { get; set; } = "";
    }
}
