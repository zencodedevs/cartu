using ConfirmAPI.Models;
using Core.Entities;
using Core.Helpers;
using Core.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
        [Consumes("application/x-www-form-urlencoded")]
        [Produces("application/xml")]
        public async Task<IActionResult> Post([FromForm] string ConfirmRequest)
        {
            if (ConfirmRequest == null)
            {
                return BadRequest();
            }

            var log = new Log
            {
                RequestLog = ConfirmRequest,
                InsertDate = DateTime.Now
            };

            var createdLog = await _paymentRepository.AddLog(log);

            if (createdLog != null)
            {
                var request = ConfirmRequest.Deserialize<ConfirmRequest>();

                var response = new ConfirmResponse
                {
                    TransactionId = request.TransactionId,
                    PaymentId = request.PaymentId,
                    Status = "ACCEPTED"
                };

                return Ok(response);
            }

            return BadRequest();
        }

        [HttpGet]
        [Route("GetUuid")]
        public IActionResult GetUuid() => Ok(new UuidResponse { Uuid = Guid.NewGuid().ToString() });
    }
}
