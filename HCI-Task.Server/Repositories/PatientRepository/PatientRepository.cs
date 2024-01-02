using HCI_Task.Server.Data;
using HCI_Task.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Repositories.PatientRepository
{
    public class PatientRepository(DataContext context) : IPatientRepository
    {
        public async Task<List<Patient>> SearchPatientByName(string searchTerm)
        {
            return await context.Patients
                .Where(p => EF.Functions.Like(p.Name, $"%{searchTerm}%")).ToListAsync();
        }
    }
}
