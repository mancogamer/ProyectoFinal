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
    public class RecursosEducativosController : Controller
    {
        private readonly AplicacionContext aplicacionContext;

        public RecursosEducativosController(AplicacionContext _aplicacionContext)
        {
            aplicacionContext = _aplicacionContext;
        }

        [HttpGet]
        [Route("MostrarRecursosEducativos")]
        public IActionResult MostrarRecursosEducativos()
        {
            List<recursos_educativo> recursosEducativos = aplicacionContext.RecursosEducativos.OrderByDescending(recurso => recurso.Id).ToList();
            return Ok(recursosEducativos);
        }

        [HttpPost]
        [Route("CrearRecursoEducativo")]
        public IActionResult CrearRecursoEducativo([FromBody] recursos_educativo recursoEducativo)
        {
            aplicacionContext.RecursosEducativos.Add(recursoEducativo);
            aplicacionContext.SaveChanges();
            return Ok(recursoEducativo);
        }

        [HttpPut]
        [Route("EditarRecursoEducativo")]
        public IActionResult EditarRecursoEducativo([FromBody] recursos_educativo recursoEducativo)
        {
            aplicacionContext.RecursosEducativos.Update(recursoEducativo);
            aplicacionContext.SaveChanges();
            return Ok(recursoEducativo);
        }

        [HttpDelete]
        [Route("EliminarRecursoEducativo")]
        public IActionResult EliminarRecursoEducativo(int id)
        {
            recursos_educativo recursoEducativo = aplicacionContext.RecursosEducativos.Find(id);
            if (recursoEducativo != null)
            {
                aplicacionContext.RecursosEducativos.Remove(recursoEducativo);
                aplicacionContext.SaveChanges();
                return Ok(recursoEducativo);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
