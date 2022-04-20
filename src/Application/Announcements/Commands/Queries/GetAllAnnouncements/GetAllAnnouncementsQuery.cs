using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Domain.Entities;
using MediatR;

namespace CleanArchitecture.Application.Announcements.Commands.Queries.GetAllAnnouncements;
public class GetAllAnnouncementsQuery : IRequest<List<Announcement>>
{
    public OrderByAnnouncementOptions OrderBy { get; set; }
}

public enum OrderByAnnouncementOptions
{
    None = 0,
    ByTitle = 1,
    ByDate = 2,
    ByAuthor = 3
}

public class GetAllAnnouncementsQueryHandler : IRequestHandler<GetAllAnnouncementsQuery, List<Announcement>> 
{
    private readonly IApplicationDbContext _context;
    //private readonly IMapper _mapper;

    public GetAllAnnouncementsQueryHandler(IApplicationDbContext context)
    {
        _context = context;
        //_mapper = mapper;
    }    

    public Task<List<Announcement>> Handle(GetAllAnnouncementsQuery request, CancellationToken cancelationToken)
    {
        var announcements = _context.Announcements.ToList();
        return Task.FromResult(announcements);
    }
}