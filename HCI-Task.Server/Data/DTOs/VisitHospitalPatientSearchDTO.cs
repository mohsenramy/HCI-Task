using System.ComponentModel.DataAnnotations;

namespace HCI_Task.Server.Data.DTOs
{
    public class VisitHospitalPatientSearchDTO
    {
        [Required]
        public int PatientId { get; set; }
        [Required] 
        public int HospitalId { get; set; }
    }
}
