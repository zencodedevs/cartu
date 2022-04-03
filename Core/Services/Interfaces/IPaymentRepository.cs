using Core.Entities;

namespace Core.Services.Interfaces
{
    public interface IPaymentRepository
    {
        Task<Log> AddLog(Log log);
    }
}
