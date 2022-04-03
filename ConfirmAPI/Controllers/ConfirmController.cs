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

            if (createdLog != null)
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

        [HttpGet]
        [Route("GetUuid")]
        [Produces("application/xml")]
        public IActionResult GetUuid()
        {
            var response = new UuidResponse
            {
                Uuid = Guid.NewGuid().ToString()
            };

            return Ok(response);
        }
    }
}
