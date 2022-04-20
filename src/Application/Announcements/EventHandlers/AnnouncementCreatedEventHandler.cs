using CleanArchitecture.Application.Common.Models;
using CleanArchitecture.Domain.Events;
using MediatR;
using Microsoft.Extensions.Logging;

namespace CleanArchitecture.Application.Announcements.EventHandler.AnnouncementCreatedEventHandler;

public class AnnouncementCreatedEventHandler : INotificationHandler<DomainEventNotification<AnnouncementCreatedEvent>>
{
    private readonly ILogger<AnnouncementCreatedEventHandler> _logger;

    public AnnouncementCreatedEventHandler(ILogger<AnnouncementCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(DomainEventNotification<AnnouncementCreatedEvent> notification, CancellationToken cancellationToken)
    {
        var domainEvent = notification.DomainEvent;

        _logger.LogInformation("CleanArchitecture Domain Event: {DomainEvent}", domainEvent.GetType().Name);

        return Task.CompletedTask;
    }
}
