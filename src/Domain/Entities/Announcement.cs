using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.Domain.Entities;
public class Announcement
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

public enum AnnouncementCategory
{
    General = 0,
    Announcement = 1,
    News = 2,
    Events = 3
}
