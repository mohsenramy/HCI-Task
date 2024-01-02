using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;

namespace HCI_Task.Server.Repositories.PatientRepository
{
    public interface IPatientRepository
    {
        Task<List<Patient>> SearchPatientByName(string searchTerm);
    }
}
