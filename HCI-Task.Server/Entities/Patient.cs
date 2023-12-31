namespace HCI_Task.Server.Entities
{

    public class Patient:BaseEntitiy
    {
        public required string Name { get; set; }
        public  DateOnly BirthDate { get; set; }
        //More Data to be added later such as address, contact, emergency contact etc
        public List<Visit> Visits { get; set; } = [];

    }
}
