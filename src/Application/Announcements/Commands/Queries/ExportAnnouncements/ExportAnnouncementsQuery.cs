using AutoMapper;
using AutoMapper.QueryableExtensions;
using CleanArchitecture.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Announcements.Queries.ExportAnnouncements;

public class AnnouncementsQuery : IRequest<ExportAnnouncementsVm>
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Message { get; set; }
    public AnnouncementCategory AnnouncementCategory { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string? ModifiedBy { get; set; }
    public bool IsActive { get; set; }
    public bool IsDeleted { get; set; }
}


public class AnnouncementsQueryHandler : IRequestHandler<AnnouncementsQuery, ExportAnnouncementsVm>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly ICsvFileBuilder _fileBuilder;

    public AnnouncementsQueryHandler(IApplicationDbContext context, IMapper mapper, ICsvFileBuilder fileBuilder)
    {
        _context = context;
        _mapper = mapper;
        _fileBuilder = fileBuilder;
    }

    public async Task<ExportAnnouncementsVm> Handle(AnnouncementsQuery request, CancellationToken cancellationToken)
    {
        var records = await _context.Announcements
                .Where(t => t.Id == request.Id)
                .ProjectTo<AnnouncementRecord>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

        var vm = new ExportAnnouncementsVm(
            "AnnouncementItems.csv",
            "text/csv",
            _fileBuilder.BuildAnnouncementsFile(records));

        return vm;
    }
}
