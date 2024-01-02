namespace HCI_Task.Server.Data.DTOs
{
    public class UserHospitalNameSearch
    {
        public int UserId { get; set; }
        public string SearchTerm { get; set; } = string.Empty;
    }
}
