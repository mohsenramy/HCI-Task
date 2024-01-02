using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using HCI_Task.Server.Repositories.VisitRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitController(IVisitRepository visitRepo) : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<List<VisitSearchResultDTO>>> RetrievePatientHospitalVisits([FromBody] VisitHospitalPatientSearchDTO search)
        {
            var result = await visitRepo.SearchHospitalVisitsByPatient(search);

            return Ok(result);
        }

        [HttpGet("visitId")]
        public async Task<ActionResult<Visit>> RetrieveVisitDetails (int visitId)
        {

            var visit = await visitRepo.GetVisitDetails(visitId);
            if(visit == null)
            {
                return NotFound($"Visit #{visitId} was Not Found!");
            }

            return Ok(visit);
        }
    }
}
