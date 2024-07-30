namespace SecureWebSite.Server.Utilities
{
    public class ApiResponse<T>
    {
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public T Result { get; set; }
    }
}
