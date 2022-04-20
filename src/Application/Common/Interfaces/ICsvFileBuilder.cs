using CleanArchitecture.Application.Announcements.Queries.ExportAnnouncements;
using CleanArchitecture.Application.TodoLists.Queries.ExportTodos;

namespace CleanArchitecture.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    byte[] BuildAnnouncementsFile(List<AnnouncementRecord> records);
}
