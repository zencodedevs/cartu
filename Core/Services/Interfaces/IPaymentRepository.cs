using Core.Entities;

namespace Core.Services.Interfaces
{
    public interface IPaymentRepository
    {
        Task<Payment> AddPayment(Payment payment);
        Task<Log> AddLog(Log log);
    }
}
