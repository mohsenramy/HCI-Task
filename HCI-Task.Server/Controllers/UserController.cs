using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using HCI_Task.Server.Repositories.UserRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController( IUserRepository userRepo) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<UserDTO>>> GetAllUsers()
        {
            //var users = context.Users.ToList();
            var users = await userRepo.GetAllUsers();
            return Ok(users);
        }

        //[HttpGet("user/{userId}/hospitals")]
        //public ActionResult<List<Hospital>> GetUserHospital(
        //    [FromRoute] int userId)
        //{
        //    var hospitals = from h in context.Hospitals
        //                    join uh in context.UserHospitals
        //                    on h.Id equals uh.HospitalId
        //                    where uh.UserId == userId
        //                    select h;

        //    return Ok(hospitals);
        //}
    }
}
