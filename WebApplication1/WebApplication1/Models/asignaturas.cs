using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Asignatura
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Nivel { get; set; }
        public string Descripcion { get; set; }
    }
}
