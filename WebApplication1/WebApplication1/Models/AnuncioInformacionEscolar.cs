using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class AnuncioInformacionEscolar
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Contenido { get; set; }
        public DateTime Fecha { get; set; }
        public string Autor { get; set; }
    }
}
