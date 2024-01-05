namespace HCI_Task.Server.Entities
{
    public enum UserRoles
    {
        Admin, Doctor, Nurse, Technician
    }
    public class UserHospital : BaseEntitiy
    {
        public int UserId { get; set; }
        public required User User { get; set; }
        public int HospitalId { get; set; }
        public required Hospital Hospital { get; set; }

        public UserRoles UserRole { get; set; }
    }
}
