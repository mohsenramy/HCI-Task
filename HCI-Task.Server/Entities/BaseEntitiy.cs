namespace HCI_Task.Server.Entities
{
    public class BaseEntitiy
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }=DateTime.Now;
    }
}
