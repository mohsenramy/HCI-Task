namespace HCI_Task.Server.Entities
{
    public class Visit : BaseEntitiy
    {

        public string? Description { get; set; }

        public int PatientId { get; set; }
        public int HospitalId { get; set; }
        public required Patient Patient { get; set; }
        public required Hospital Hospital { get; set; }

    }
}
