using System.Security.Claims;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using CleanArchitecture.Domain.Events;
using MediatR;

namespace CleanArchitecture.Application.Announcements.Commands.CreateAnnouncementCommand;

public class CreateAnnouncementCommand : IRequest<int>
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Message { get; set; }
    //public AnnouncementCategory AnnouncementCategory { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string? ModifiedBy { get; set; }
    public bool IsActive { get; set; }
    public bool IsDeleted { get; set; }
}



public class CreateAnnouncementCommandHandler : IRequestHandler<CreateAnnouncementCommand, int>
{
    
    private readonly IApplicationDbContext _context;

    public CreateAnnouncementCommandHandler(IApplicationDbContext context)
    {
   
        _context = context;

    }

    public async Task<int> Handle(CreateAnnouncementCommand request, CancellationToken cancellationToken)
    {
        

        var entity = new Announcement
        {
            //CreatedBy = userId,
            Title = request.Title,
        };

        //entity.DomainEvents.Add(new AnnouncementCreatedEvent(entity));

        _context.Announcements.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
