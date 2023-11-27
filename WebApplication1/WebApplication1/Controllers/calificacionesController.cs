using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Context;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnunciosInformacionEscolarController : ControllerBase
    {
        private readonly AplicacionContext aplicacionContext;

        public AnunciosInformacionEscolarController(AplicacionContext _aplicacionContext)
        {
            aplicacionContext = _aplicacionContext;
        }

        [HttpGet]
        [Route("MostrarAnunciosInformacionEscolar")]
        public async Task<IActionResult> MostrarAnunciosInformacionEscolar()
        {
            List<AnuncioInformacionEscolar> anuncios = await aplicacionContext.AnunciosInformacionEscolar.OrderByDescending(anuncio => anuncio.Id).ToListAsync();
            return Ok(anuncios);
        }

        [HttpPost]
        [Route("CrearAnuncioInformacionEscolar")]
        public async Task<IActionResult> CrearAnuncioInformacionEscolar([FromBody] AnuncioInformacionEscolar anuncio)
        {
            aplicacionContext.AnunciosInformacionEscolar.Add(anuncio);
            await aplicacionContext.SaveChangesAsync();
            return Ok(anuncio);
        }

        [HttpPut]
        [Route("EditarAnuncioInformacionEscolar")]
        public async Task<IActionResult> EditarAnuncioInformacionEscolar([FromBody] AnuncioInformacionEscolar anuncio)
        {
            aplicacionContext.AnunciosInformacionEscolar.Update(anuncio);
            await aplicacionContext.SaveChangesAsync();
            return Ok(anuncio);
        }

        [HttpDelete]
        [Route("EliminarAnuncioInformacionEscolar")]
        public async Task<IActionResult> EliminarAnuncioInformacionEscolar(int id)
        {
            AnuncioInformacionEscolar anuncio = await aplicacionContext.AnunciosInformacionEscolar.FindAsync(id);
            if (anuncio != null)
            {
                aplicacionContext.AnunciosInformacionEscolar.Remove(anuncio);
                await aplicacionContext.SaveChangesAsync();
                return Ok(anuncio);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
