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
    public class VisitController(DataContext context) : ControllerBase
    {
        [HttpPost]
        public ActionResult<List<VisitSearchResult>> RetrievePatientHospitalVisits([FromBody] VisitSearch search)
        {
            var result = context.Visits
                .Where(v => v.PatientId == search.PatientId &&
                            v.HospitalId == search.HospitalId)
                .Select(v=> new VisitSearchResult
                {
                    Id = v.Id,
                    Description = v.Description,
                    CreatedAt = v.CreatedAt,

                }).ToList();

            return Ok(result);
        }

        [HttpGet("visitId")]
        public ActionResult<Visit> RetrieveVisitDetails (int visitId)
        {
            var visit = context.Visits
                .Where(v => v.Id == visitId)
                .Include(v => v.Patient)
                .Include("Hospital")
                .FirstOrDefault(/*v => v.Id == visitId*/);

            return Ok(visit);
        }
    }
}
