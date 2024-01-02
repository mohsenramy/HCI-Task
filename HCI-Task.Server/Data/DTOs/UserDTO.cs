using System.ComponentModel.DataAnnotations;

namespace HCI_Task.Server.Data.DTOs
{
    public class UserDTO
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
    }
}
