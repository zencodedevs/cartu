namespace Core.Entities
{
    public class Log
    {
        public long Id { get; set; }
        public string? RequestLog { get; set; }
        public DateTime InsertDate { get; set; }
    }
}
