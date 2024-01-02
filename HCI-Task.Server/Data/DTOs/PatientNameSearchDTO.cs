using System.ComponentModel.DataAnnotations;

namespace HCI_Task.Server.Data.DTOs
{
    public class PatientNameSearchDTO
    {
        [Required]
        public string SearchTerm { get; set; } = string.Empty;
    }
}
