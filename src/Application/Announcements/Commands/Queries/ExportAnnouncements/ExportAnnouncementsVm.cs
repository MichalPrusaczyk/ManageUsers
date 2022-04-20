namespace CleanArchitecture.Application.Announcements.Queries.ExportAnnouncements;

public class ExportAnnouncementsVm
{
    public ExportAnnouncementsVm(string fileName, string contentType, byte[] content)
    {
        FileName = fileName;
        ContentType = contentType;
        Content = content;
    }

    public string FileName { get; set; }

    public string ContentType { get; set; }

    public byte[] Content { get; set; }
}
