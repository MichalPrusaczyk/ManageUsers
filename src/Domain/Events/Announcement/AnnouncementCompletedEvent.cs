namespace CleanArchitecture.Domain.Events;

public class AnnouncementCompletedEvent : DomainEvent
{
    public AnnouncementCompletedEvent(Announcement item)
    {
        Announcement = item;
    }

    public Announcement Announcement { get; }
}
