using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using formbuild4.FormBuild4Model;
using System.Linq;
using Newtonsoft.Json;

namespace formbuild4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class formbuild4Controller : ControllerBase
    {
        private readonly ILogger<formbuild4Controller> _logger;
        private readonly FormBuild4DBContext _dBContext;
        public formbuild4Controller(ILogger<formbuild4Controller> logger,FormBuild4DBContext dBContext)
        {
            _dBContext = dBContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> formbuild(){
            var res = await  _dBContext.Formbase.ToListAsync();
            return Ok(JsonConvert.SerializeObject(res,Formatting.Indented));
        }
    }
}