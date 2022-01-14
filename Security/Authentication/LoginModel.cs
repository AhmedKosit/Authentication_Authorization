using System.ComponentModel.DataAnnotations;

namespace Security.Authentication
{
    public class LoginModel
    {
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
        [Required(ErrorMessage = "BUID is required")]
        public string BUID { get; set; }
        public string Lang { get; set; }
    }
}
