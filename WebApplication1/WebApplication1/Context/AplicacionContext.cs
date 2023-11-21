using Microsoft.EntityFrameworkCore;
using WebApplication1.Controllers;
using WebApplication1.Models;

namespace WebApplication1.Context
{
    public class AplicacionContext : DbContext
    {
        public AplicacionContext (DbContextOptions<AplicacionContext> options)
            : base(options) 
        {
        
        }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Asignatura> Asignaturas { get; set; }
        public DbSet<recursos_educativo> RecursosEducativos { get; set; }
        public DbSet<AnuncioInformacionEscolar> AnunciosInformacionEscolar { get; set; }
    }
}
