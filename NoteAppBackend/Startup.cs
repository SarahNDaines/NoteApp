using Microsoft.EntityFrameworkCore;
using NoteAppBackend.Data;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Add CORS policy
        services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin",
            builder =>
            {
                builder.WithOrigins("http://localhost:8100")
                       .AllowAnyHeader()
                       .AllowAnyMethod();
            });
        });

        services.AddDbContext<NoteContext>(options =>
            options.UseSqlite("Data Source=notes.db"));

        services.AddControllers();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();

        app.UseCors("AllowSpecificOrigin");

        app.UseStaticFiles();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
