using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Events;
using MediatR;
using Microsoft.Extensions.Logging;

namespace CleanArchitecture.Application.Announcements.EventHandlers.AnnouncementCompletedEventHandler;

public class AnnouncementCompletedEventHandler : INotificationHandler<DomainEventNotification<AnnouncementCompletedEvent>>
{
    private readonly ILogger<AnnouncementCompletedEventHandler> _logger;

    public AnnouncementCompletedEventHandler(ILogger<AnnouncementCompletedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(DomainEventNotification<AnnouncementCompletedEvent> notification, CancellationToken cancellationToken)
    {
        var domainEvent = notification.DomainEvent;

        _logger.LogInformation("CleanArchitecture Domain Event: {DomainEvent}", domainEvent.GetType().Name);

        return Task.CompletedTask;
    }
}
