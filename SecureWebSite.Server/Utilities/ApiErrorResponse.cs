namespace SecureWebSite.Server.Utilities
{
    public class ApiErrorResponse
    {
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public List<string> Errors { get; set; }
    }
}
