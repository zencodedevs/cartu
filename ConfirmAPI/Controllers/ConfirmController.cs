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
        private readonly ILogger<ConfirmController> _logger;


        public ConfirmController(IPaymentRepository paymentRepository, ILogger<ConfirmController> logger)
        {
            _paymentRepository = paymentRepository;
            _logger = logger;
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

            _logger.LogTrace($"Log Request {ConfirmRequest}");

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


        [HttpGet]
        [Route("LogTestData")]
        public IActionResult LogTestData()
        {

            _logger.LogDebug("Debug message");
            _logger.LogTrace("Didi Text For Trace COOOOOOOMFIRM New LLLLL TTRX mmmIOT");
            _logger.LogError("Didi Text For Error COOOOOOOMFIRM New LLLLL TTRX mmmIOT");
            _logger.LogWarning("Warning message");
            _logger.LogCritical("Critical message");
            _logger.LogInformation("Information message");




            return Ok();
        }
    }
}
