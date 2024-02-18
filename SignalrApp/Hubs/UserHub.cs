using Microsoft.AspNetCore.SignalR;

namespace SignalrApp.Hubs
{
    public class UserHub:Hub
    {
        public static int TotalViews { get; set; } = 0;

        public async Task NewWindowLoaded()
        {
            TotalViews++;
            //send update to all clients that total view have been updated.

            await Clients.All.SendAsync("updateTotalViews", TotalViews);
        }
    }
}
