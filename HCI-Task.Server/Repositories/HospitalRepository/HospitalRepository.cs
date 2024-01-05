using HCI_Task.Server.Data;
using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;
using HCI_Task.Server.Repositories.HospotalRepository;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Repositories.HospitalRepository
{
    public class HospitalRepository(DataContext context) : IHospitalRepository
    {
        public async Task<List<Hospital>> SearchUserHospitalByName(UserHospitalSearchDTO search)
        {
            var query = from hosp in context.Hospitals
                        join userHosps in context.UserHospitals
                        on hosp.Id equals userHosps.HospitalId
                        where userHosps.UserId == search.UserId
                        && EF.Functions.Like(hosp.Name, $"%{search.SearchTerm}%")
                        select hosp;

            return await query.ToListAsync();
        }
    }
}
