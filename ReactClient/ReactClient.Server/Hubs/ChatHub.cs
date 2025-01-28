
using Microsoft.AspNetCore.SignalR;

namespace ReactClient.Server.Hubs
{
    public class ChatHub : Hub
    {
        public override async Task OnConnectedAsync() =>  await Clients.All.SendAsync("AllClientsNotification", $"{Context.ConnectionId} has joined the chat.");
        public override async Task OnDisconnectedAsync(Exception? exception) => await Clients.All.SendAsync("AllClientsNotification", $"{Context.ConnectionId} has just left the chat.");
        
    }
}
