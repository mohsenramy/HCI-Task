﻿using HCI_Task.Server.Data.DTOs;
using HCI_Task.Server.Entities;

namespace HCI_Task.Server.Repositories.HospitalRepository
{
    public interface IHospitalRepository
    {
        Task<List<Hospital>> SearchUserHospitalByName(UserHospitalSearchDTO search);
    }
}
