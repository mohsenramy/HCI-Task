using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using HCI_Task.Server.Repositories.PatientRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController(IPatientRepository patientRepo) : ControllerBase
    {

        [HttpPost]
        public async Task<ActionResult<List<Patient>>> SearchPatientNames([FromBody] PatientNameSearchDTO search)
        {
            var result = await patientRepo.SearchPatientByName(search.SearchTerm);
                

            return Ok(result);
        }
    }
}
