using Microsoft.AspNetCore.Mvc;
using WebAplication.Context;
using WebAplication.Models;

namespace WebAplication.Controllers
{
    [ApiController]

    [Route("[controller]")]
    public class Perfiles_Alumnos_Controller : ControllerBase
    {

        private readonly ILogger<Perfiles_Alumnos_Controller> _logger;

        private readonly Aplication_Context _aplication_context;
        public Perfiles_Alumnos_Controller(
            ILogger<Perfiles_Alumnos_Controller> logger,


            Aplication_Context aplication_context)
        {
            _logger = logger;


            _aplication_context = aplication_context;

        }
        /*Crear*/
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] perfiles_alumnos perfil_alumno)
        {
            _aplication_context.perfil.Add(perfil_alumno);

            _aplication_context.SaveChanges();
            return Ok(perfil_alumno);

        }
        /*Obtener lista*/
        [Route("")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_aplication_context.perfil.ToList());

        }
        /*Modificar*/
        [Route("{id}")]

        [HttpPut]
        public IActionResult Put(
            [FromBody] perfiles_alumnos perfil_alumno)
        {
            _aplication_context.perfil.Update(perfil_alumno);
            _aplication_context.SaveChanges();

            return Ok(perfil_alumno);
        }
        /*Eliminar*/
        [Route("{id}")]
        [HttpDelete]
        public IActionResult Delete(int perfil_id)
        {
            _aplication_context.perfil.Remove(
                _aplication_context.perfil.ToList()
                .Where(x => x.id == perfil_id)

                .FirstOrDefault());
            _aplication_context.SaveChanges();

            return Ok(perfil_id);
        }
    }
}
