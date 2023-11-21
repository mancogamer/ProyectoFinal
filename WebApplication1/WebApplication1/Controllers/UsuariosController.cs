using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Context;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AutenticacionController : ControllerBase
    {
        private readonly AplicacionContext aplicacionContext;
        private readonly string claveSecreta = "tu_clave_secreta_super_segura"; // Cambia esto por una clave secreta segura

        public AutenticacionController(AplicacionContext _aplicacionContext)
        {
            aplicacionContext = _aplicacionContext;
        }

        [HttpPost]
        [Route("IniciarSesion")]
        public async Task<IActionResult> IniciarSesion([FromBody] CredencialesInicioSesion credenciales)
        {
            try
            {
                var usuario = await aplicacionContext.Usuarios
                    .Where(u => u.CorreoElectronico == credenciales.CorreoElectronico && u.Contrasena == credenciales.Contrasena)
                    .FirstOrDefaultAsync();

                if (usuario == null)
                {
                    return Unauthorized(new { mensaje = "Credenciales inválidas" });
                }

                var token = GenerarToken(usuario);

                return Ok(new { mensaje = "Inicio de sesión exitoso", token });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { mensaje = "Error interno del servidor", error = ex.Message });
            }
        }

        private string GenerarToken(Usuario usuario)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, usuario.CorreoElectronico),
                new Claim(ClaimTypes.Role, usuario.Rol),
                new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString())
            };

            var clave = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(claveSecreta));
            var credenciales = new SigningCredentials(clave, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "tu_issuer", // Cambia esto por el emisor del token
                audience: "tu_audience", // Cambia esto por la audiencia del token
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1), // Cambia la duración del token según tus necesidades
                signingCredentials: credenciales
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
