namespace CleanArchitecture.Domain.Events;

public class AnnouncementCreatedEvent : DomainEvent
{
    public AnnouncementCreatedEvent(Announcement item)
    {
        Announcement = item;
    }

    public Announcement Announcement { get; }
}
