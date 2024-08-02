using MusicStoreAPI.DataLayer;

namespace MusicStoreAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            ConfigurationManager config = builder.Configuration;
            var connectionString = config.GetConnectionString("sconstringwin");

            // Add services to the container.
            //builder.Services.AddScoped<IDbConnection>(c => new SqlConnection(connectionString));
            
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddScoped<AlbumDL>();
            builder.Services.AddScoped<CustomerDL>();
            builder.Services.AddScoped<EmployeeDL>();
            builder.Services.AddScoped<UserClassDL>();
            builder.Services.AddScoped<CartDL>();
            builder.Services.AddScoped<OrderDL>();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyCorsPolicy", builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors("MyCorsPolicy");
            app.UseAuthorization();


            app.MapControllers();
            

            app.Run();
        }
    }
}
