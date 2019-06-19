using System;
using System.ComponentModel.DataAnnotations;

namespace WebApplication4.Models
{
    public class MyContact
    {
        public Guid Guid { get; set; }
        [Required]
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string EmailAddress { get; set; }
    }
}
