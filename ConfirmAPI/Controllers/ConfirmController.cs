using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ConfirmAPI.Models;
using Core.Entities;
using Core.Helpers;
using Core.Services.Interfaces;
using Data.Services;

namespace ConfirmAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConfirmController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;

        public ConfirmController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        [HttpPost]
        [Consumes("application/xml")]
        [Produces("application/xml")]
        public async Task<IActionResult> Post([FromBody] ConfirmRequest model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            var log = new Log
            {
                RequestLog = model.Serialize(),
                InsertDate = DateTime.Now
            };

            var createdLog = await _paymentRepository.AddLog(log);

            var payment = new Payment
            {
                TransactionId = model.TransactionId,
                PaymentId = model.PaymentId,
                PaymentDate = DateTime.Parse(model.PaymentDate),
                Amount = model.Amount,
                Status = model.Status,
                Reason = model.Reason,
                CardType = model.CardType
            };

            var createdPayment = await _paymentRepository.AddPayment(payment);

            if (createdPayment != null)
            {
                var response = new ConfirmResponse
                {
                    TransactionId = model.TransactionId,
                    PaymentId = model.PaymentId,
                    Status = "ACCEPTED"
                };

                return Ok(response);
            }

            return BadRequest();
        }

        private string GetGuid()
        {
            return new Guid().ToString();
        }
    }
}
