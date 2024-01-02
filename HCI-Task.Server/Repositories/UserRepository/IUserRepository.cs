using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;

namespace HCI_Task.Server.Repositories.UserRepository
{
    public interface IUserRepository
    {
        Task<List<UserDTO>> GetAllUsers();
    }
}
