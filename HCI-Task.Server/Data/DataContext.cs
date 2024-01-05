using HCI_Task.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace HCI_Task.Server.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options) 
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<UserHospital> UserHospitals { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Visit> Visits { get; set; }
    }
}
