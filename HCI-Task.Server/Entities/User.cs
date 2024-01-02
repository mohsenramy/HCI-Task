namespace HCI_Task.Server.Entities
{
    public class User:BaseEntitiy
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }

    }
}
