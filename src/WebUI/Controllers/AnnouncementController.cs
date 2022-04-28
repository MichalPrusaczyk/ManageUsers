using System.Security.Claims;
using CleanArchitecture.Application.Announcements.Commands.CreateAnnouncementCommand;
using CleanArchitecture.Application.Announcements.Commands.Queries.GetAllAnnouncements;
using CleanArchitecture.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitectureWebUI.Controllers;
public class AnnouncementController : ApiControllerBase
{

    [HttpGet]
    public async Task<ActionResult<List<Announcement>>> GetAllAnnouncements()
    {
        var request = new GetAllAnnouncementsQuery
        {
            OrderBy = OrderByAnnouncementOptions.None,
        };
        
        return await Mediator.Send(request);
    }

    [HttpPost]
    public async Task<ActionResult<int>> Create(CreateAnnouncementCommand command)
    {
        var claimsIdentity = (ClaimsIdentity)User.Identity;
        var claims = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);
        string userId = claims.Value;

        return await Mediator.Send(command);
    }
}
