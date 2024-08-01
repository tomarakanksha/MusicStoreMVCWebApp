using Microsoft.AspNetCore.Mvc.ModelBinding;
using MusicStoreAPI.DTO;
using System.Data.SqlClient;

namespace MusicStoreAPI.DataLayer
{
    public class EmployeeDL
    {
        private readonly string _connString;

        public EmployeeDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }

        public EmployeeDTO GetEmployeeByID(int id)
        {
            var model = new EmployeeDTO();
            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "Select top 1 * from dbo.Employee e inner join dbo.Users u on e.UserID=u.UserID where e.UserID = @UserID;";
            cmd.Parameters.AddWithValue("@UserID", id);
            cmd.CommandType = System.Data.CommandType.Text;

            var cReader = cmd.ExecuteReader();
            while (cReader.Read())
            {
                model.EmployeeId = Convert.ToInt64(cReader["EmployeeId"]);
                model.FName = Convert.ToString(cReader["FName"]);
                model.LName = Convert.ToString(cReader["LName"]);
                model.EmailId = Convert.ToString(cReader["EmailID"]);
                model.Department = Convert.ToString(cReader["Department"]);
                model.DateOfJoining = Convert.ToString(cReader["DateOfJoining"]);
                model.Phone = Convert.ToString(cReader["Phone"]);
                model.Password = Convert.ToString(cReader["Password"]);
            }

            return model;
        }

    }
}
