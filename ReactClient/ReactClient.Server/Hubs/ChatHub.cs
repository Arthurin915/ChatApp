
using Microsoft.AspNetCore.SignalR;

namespace ReactClient.Server.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(string user)
        {
            await Clients.All.SendAsync("ReceiveMessage", $"{user} has joined");
        }
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", $"{user} sent message: {message}");
        }
    }
}
