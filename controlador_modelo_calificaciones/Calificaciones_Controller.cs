using Microsoft.AspNetCore.Mvc;
using WebAplication.Context;
using WebAplication.Models;

namespace WebAplication.Controllers
{
    [ApiController]

    [Route("[controller]")]
    public class Calificaciones_Controller : ControllerBase
    {

        private readonly ILogger<Calificaciones_Controller> _logger;

        private readonly Aplication_Context _aplication_context;
        public Calificaciones_Controller(
            ILogger<Calificaciones_Controller> logger,


            Aplication_Context aplication_context)
        {
            _logger = logger;


            _aplication_context = aplication_context;

        }
        /*Crear*/
        [Route("")]
        [HttpPost]
        public IActionResult Post(
            [FromBody] calificaciones calf)
        {
            _aplication_context.calificacion.Add(calf);

            _aplication_context.SaveChanges();
            return Ok(calf);

        }
        /*Obtener lista*/
        [Route("")]
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_aplication_context.calificacion.ToList());

        }
        /*Modificar*/
        [Route("/id")]

        [HttpPut]
        public IActionResult Put(
            [FromBody] calificaciones calf)
        {
            _aplication_context.calificacion.Update(calf);
            _aplication_context.SaveChanges();

            return Ok(calf);
        }
        /*Eliminar*/
        [Route("/id")]
        [HttpDelete]
        public IActionResult Delete(int calificaion_id)
        {
            _aplication_context.calificacion.Remove(
                _aplication_context.calificacion.ToList()
                .Where(x => x.id == calificaion_id)

                .FirstOrDefault());
            _aplication_context.SaveChanges();

            return Ok(calificaion_id);
        }
    }
}
