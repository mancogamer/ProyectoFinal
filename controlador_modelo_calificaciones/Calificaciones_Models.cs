using System.ComponentModel.DataAnnotations;

namespace WebAplication.Models
{
    public class calificaciones
    {
        [Key]

        public int id { get; set; }

        public int alumno_id { get; set; }

        public int asignatura { get; set; }

        public int calificacion { get; set; }

        public string comentario { get; set; }

        public DateTime fecha { get; set; }

    }

}
