using Microsoft.AspNetCore.Mvc;

namespace CursoEmVideo.Controllers;

public class SomaController : Controller
{
    private readonly ILogger<SomaController> _logger;

    public SomaController(ILogger<SomaController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}
