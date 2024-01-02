using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController(DataContext context) : ControllerBase
    {
        [HttpPost]
        public ActionResult<List<Hospital>> SearchUserHospitalsNames([FromBody] UserHospitalNameSearch search)
        {

            var hospitals = from hosp in context.Hospitals
                            join userHosps in context.UserHospitals
                            on hosp.Id equals userHosps.Id
                            where userHosps.UserId == search.UserId
                            && EF.Functions.Like(hosp.Name, $"%{search.SearchTerm}%")
                            select hosp;

            return Ok(hospitals);
        }
    }
}
