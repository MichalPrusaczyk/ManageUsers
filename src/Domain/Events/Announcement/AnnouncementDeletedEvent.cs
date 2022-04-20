namespace CleanArchitecture.Domain.Events;

public class AnnouncementDeletedEvent : DomainEvent
{
    public AnnouncementDeletedEvent(Announcement item)
    {
        Announcement = item;
    }

    public Announcement Announcement { get; }
}
