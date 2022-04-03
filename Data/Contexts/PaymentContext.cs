using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Core.Entities;

namespace Data.Contexts
{
    public class PaymentContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public PaymentContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Server=(localdb)\\mssqllocaldb; Database=Payments; Trusted_Connection=True;", b => b.MigrationsAssembly("ConfirmAPI"));
        }

        public DbSet<Payment> Payments { get; set; }
        public DbSet<Log> Logs { get; set; }

        public string DbPath { get; }
    }
}
