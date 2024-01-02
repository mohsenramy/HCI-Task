using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;

namespace HCI_Task.Server.Repositories.VisitRepository
{
    public interface IVisitRepository
    {
        Task<List<VisitSearchResultDTO>> SearchHospitalVisitsByPatient(VisitHospitalPatientSearchDTO search);
        Task<Visit> GetVisitDetails(int visitId);
    }
}
