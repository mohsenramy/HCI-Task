using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Repositories.VisitRepository
{
    public class VisitRepository(DataContext context) : IVisitRepository
    {
        public async Task<Visit> GetVisitDetails(int visitId)
        {
            var visitDetails =  await context.Visits
                .Where(v => v.Id == visitId)
                .Include(v => v.Patient)
                .Include("Hospital")
                .FirstOrDefaultAsync();
            
            return visitDetails!;
        }

        public async Task<List<VisitSearchResultDTO>> SearchHospitalVisitsByPatient(VisitHospitalPatientSearchDTO search)
        {
            return await context.Visits
                .Where(v => v.PatientId == search.PatientId &&
                            v.HospitalId == search.HospitalId)
                .Select(v => new VisitSearchResultDTO
                {
                    Id = v.Id,
                    Description = v.Description,
                    CreatedAt = v.CreatedAt,

                }).ToListAsync();
        }
    }
}
