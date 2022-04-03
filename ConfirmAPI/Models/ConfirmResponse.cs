namespace ConfirmAPI.Models
{
    public class ConfirmResponse
    {
        public string? TransactionId { get; set; }
        public string? PaymentId { get; set; }
        public string? Status { get; set; }
    }
}
