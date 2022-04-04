using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

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
            options.UseSqlServer(_configuration.GetConnectionString("WebApiDatabase"), b => b.MigrationsAssembly("ConfirmAPI"));
        }

        public DbSet<Log> Logs { get; set; }

        public string DbPath { get; }
    }
}
