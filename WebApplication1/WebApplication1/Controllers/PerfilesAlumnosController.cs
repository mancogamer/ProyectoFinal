using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Context;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PerfilesAlumnosController : ControllerBase
    {
        private readonly AplicacionContext aplicacionContext;

        public PerfilesAlumnosController(AplicacionContext _aplicacionContext)
        {
            aplicacionContext = _aplicacionContext;
        }

        [HttpGet]
        [Route("MostrarPerfilesAlumnos")]
        public async Task<IActionResult> MostrarPerfilesAlumnos()
        {
            List<PerfilesAlumnos> perfiles = await aplicacionContext.PerfilAlumno.OrderByDescending(perfil => perfil.Id).ToListAsync();
            return Ok(perfiles);
        }

        [HttpPost]
        [Route("CrearPerfilAlumno")]
        public async Task<IActionResult> CrearPerfilAlumno([FromBody] PerfilesAlumnos perfil)
        {
            aplicacionContext.PerfilAlumno.Add(perfil);
            await aplicacionContext.SaveChangesAsync();
            return Ok(perfil);
        }

        [HttpPut]
        [Route("EditarPerfilAlumno")]
        public async Task<IActionResult> EditarPerfilAlumno([FromBody] PerfilesAlumnos perfil)
        {
            aplicacionContext.PerfilAlumno.Update(perfil);
            await aplicacionContext.SaveChangesAsync();
            return Ok(perfil);
        }

        [HttpDelete]
        [Route("EliminarPerfilAlumno")]
        public async Task<IActionResult> EliminarPerfilAlumno(int id)
        {
            PerfilesAlumnos perfil = await aplicacionContext.PerfilAlumno.FindAsync(id);
            if (perfil != null)
            {
                aplicacionContext.PerfilAlumno.Remove(perfil);
                await aplicacionContext.SaveChangesAsync();
                return Ok(perfil);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
