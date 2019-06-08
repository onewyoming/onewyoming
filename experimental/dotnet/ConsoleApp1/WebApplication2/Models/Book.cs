using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class Book
    {
        [System.ComponentModel.DataAnnotations.Schema.DatabaseGenerated(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.None)]
        public string Isbn13 { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public int PublicationYear { get; set; }
        public Publisher Publisher { get; set; }
    }
}
