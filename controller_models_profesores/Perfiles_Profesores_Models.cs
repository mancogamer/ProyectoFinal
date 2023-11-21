using System.ComponentModel.DataAnnotations;

namespace WebAplication.Models
{
    public class perfiles_profesores
    {
        [Key]

        public int id { get; set; }
        
        public int usuario { get; set; }

        public string informacion_personal { get; set; }

        public string informacion_academica { get; set; }

        public string informacion_contacto { get; set; }

        public string foto { get; set; }
    }
}
