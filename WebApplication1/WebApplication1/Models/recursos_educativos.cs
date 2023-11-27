using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class recursos_educativo
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Tipo { get; set; }
        public string Archivo { get; set; }
        public DateTime Fecha { get; set; }
        public DateTime UltimoAcceso { get; set; }
    }
}