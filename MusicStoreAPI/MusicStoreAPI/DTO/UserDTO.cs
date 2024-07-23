namespace MusicStoreAPI.DTO
{
    public partial class UserDTO
    {
        public long UserId { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string EmailID { get; set; }
        public string Password { get; set; }
        public string? Phone { get; set; }
        public string UserType { get; set; }
        public DateTime? LastLogin { get; set; }

        public DateTime? PwdLastUpdated { get; set; }

        public bool Active { get; set; }
    }
}
