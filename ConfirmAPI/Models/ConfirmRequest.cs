namespace ConfirmAPI.Models
{
    public class ConfirmRequest
    {
        public string? TransactionId { get; set; }
        public string? PaymentId { get; set; }
        public string PaymentDate { get; set; }
        public decimal? Amount { get; set; }
        public string? CardType { get; set; }
        public string? Status { get; set; }
        public string? Reason { get; set; }
    }
}
