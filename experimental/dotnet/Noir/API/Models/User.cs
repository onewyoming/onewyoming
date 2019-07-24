namespace API.Models
{
    public class User
    {
        public int id { get; set; }
        public int siteId { get; set; }
        public int xxhrId { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string displayName { get; set; }
        public string[] roles { get; set; }

        public User(int id, int siteId, int xxhrId, string username, string email, string displayName, string[] roles)
        {
            this.id = id;
            this.siteId = siteId;
            this.xxhrId = xxhrId;
            this.username = username;
            this.email = email;
            this.displayName = displayName;
            this.roles = roles;
        }
    }
}