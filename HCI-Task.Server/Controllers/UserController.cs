using HCI_Task.Server.Data;
using HCI_Task.Server.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController( DataContext context) : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<User>> GetAllUsers()
        {
            var users = context.Users.ToList();

            return Ok(users);
        }

        [HttpGet("user/{userId}/hospitals")]
        public ActionResult<List<Hospital>> GetUserHospital(
            [FromRoute] int userId)
        {
            var hospitals = from h in context.Hospitals
                            join uh in context.UserHospitals
                            on h.Id equals uh.HospitalId
                            where uh.UserId == userId
                            select h;

            return Ok(hospitals);
        }
    }
}
