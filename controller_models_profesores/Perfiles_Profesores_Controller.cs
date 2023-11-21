using Microsoft.AspNetCore.Mvc;
using WebAplication.Context;
using WebAplication.Models;

namespace WebAplication.Controllers
{
    [ApiController]

    [Route("[controller]")]
    public class Perfiles_Profesores_Controller : ControllerBase
    {

        private readonly ILogger<Perfiles_Profesores_Controller> _logger;

        private readonly Aplication_Context _aplication_context;
        public Perfiles_Profesores_Controller(
            ILogger<Perfiles_Profesores_Controller> logger,


            Aplication_Context aplication_context)
        {
            _logger = logger;


            _aplication_context = aplication_context;

        }
        /*Crear*/
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] perfiles_profesores perfil_profe)
        {
            _aplication_context.perfil_profes.Add(perfil_profe);

            _aplication_context.SaveChanges();
            return Ok(perfil_profe);

        }
        /*Obtener lista*/
        [Route("")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_aplication_context.perfil_profes.ToList());

        }
        /*Modificar*/
        [Route("{id}")]

        [HttpPut]
        public IActionResult Put(
            [FromBody] perfiles_profesores perfil_profe)
        {
            _aplication_context.perfil_profes.Update(perfil_profe);
            _aplication_context.SaveChanges();

            return Ok(perfil_profe);
        }
        /*Eliminar*/
        [Route("{id}")]
        [HttpDelete]
        public IActionResult Delete(int perfi_ID)
        {
            _aplication_context.perfil_profes.Remove(
                _aplication_context.perfil_profes.ToList()
                .Where(x => x.id == perfi_ID)

                .FirstOrDefault());
            _aplication_context.SaveChanges();

            return Ok(perfi_ID);
        }
    }
}
