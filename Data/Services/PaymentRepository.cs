using Data.Contexts;
using Core.Entities;
using Core.Services.Interfaces;

namespace Data.Services
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentContext _paymentContext;

        public PaymentRepository(PaymentContext paymentContext)
        {
            _paymentContext = paymentContext;
        }

        public async Task<Log> AddLog(Log log)
        {
            var result = await _paymentContext.Logs.AddAsync(log);
            await _paymentContext.SaveChangesAsync();

            return result.Entity;
        }
    }
}
