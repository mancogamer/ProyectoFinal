using Microsoft.AspNetCore.Mvc;
using WebApplication1.Context;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AsignaturaController : ControllerBase
    {
        private readonly AplicacionContext aplicacionContext;

        public AsignaturaController(AplicacionContext _aplicacionContext)
        {
            aplicacionContext = _aplicacionContext;
        }

        [HttpGet]
        [Route("MostrarAsignaturas")]
        public IActionResult MostrarAsignaturas()
        {
            List<Asignatura> asignaturas = aplicacionContext.Asignaturas.OrderByDescending(asignatura => asignatura.Id).ToList();
            return Ok(asignaturas);
        }

        [HttpPost]
        [Route("CrearAsignatura")]
        public IActionResult CrearAsignatura([FromBody] Asignatura asignatura)
        {
            aplicacionContext.Asignaturas.Add(asignatura);
            aplicacionContext.SaveChanges();
            return Ok(asignatura);
        }

        [HttpPut]
        [Route("EditarAsignatura")]
        public IActionResult EditarAsignatura([FromBody] Asignatura asignatura)
        {
            aplicacionContext.Asignaturas.Update(asignatura);
            aplicacionContext.SaveChanges();
            return Ok(asignatura);
        }

        [HttpDelete]
        [Route("EliminarAsignatura")]
        public IActionResult EliminarAsignatura(int id)
        {
            Asignatura asignatura = aplicacionContext.Asignaturas.Find(id);
            if (asignatura != null)
            {
                aplicacionContext.Asignaturas.Remove(asignatura);
                aplicacionContext.SaveChanges();
                return Ok(asignatura);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
