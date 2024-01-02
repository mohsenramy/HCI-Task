using System.ComponentModel.DataAnnotations;

namespace HCI_Task.Server.Data.DTOs
{
    public class UserHospitalSearchDTO
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string SearchTerm { get; set; } = string.Empty;
    }
}
