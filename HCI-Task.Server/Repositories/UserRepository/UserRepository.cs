using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Repositories.UserRepository
{
    public class UserRepository(DataContext context) : IUserRepository
    {
        public async Task<List<UserDTO>> GetAllUsers()
        {
            return await context.Users
                .Select(u => new UserDTO
                {
                    Id = u.Id,
                    UserName = u.UserName,
                })
                .ToListAsync();
        }
    }
}
