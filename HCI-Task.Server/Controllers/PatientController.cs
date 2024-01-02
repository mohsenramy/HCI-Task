using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController(DataContext context) : ControllerBase
    {

        [HttpPost]
        public ActionResult<List<Patient>> SearchPatientNames([FromBody] PatientNameSearch Search)
        {
            var result = context.Patients
                .Where(p => EF.Functions.Like(p.Name, $"%{Search.SearchTerm}%"));
                

            return Ok(result);
        }
    }
}
