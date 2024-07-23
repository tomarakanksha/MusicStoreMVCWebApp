using System.Data.SqlClient;
using System.Data;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.DataLayer
{
    public class UserClassDL
    {
        private readonly string _connString;

        public UserClassDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }
        public SignInDTO ValidateUser(SignInDTO model)
        {
            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "prValidateUser";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@emailId", model.EmailId));
            cmd.Parameters.Add(new SqlParameter("@password", model.Password));
            cmd.Parameters.Add(new SqlParameter("@userId", model.UserId) { Direction = ParameterDirection.Output });
            cmd.Parameters.Add(new SqlParameter("@userType", model.UserType) { Direction = ParameterDirection.Output });

            cmd.ExecuteNonQuery();
            model.UserId = (Int64)cmd.Parameters["@userId"].Value;
            model.UserType = (string)cmd.Parameters["@userType"].Value;

            return model;
        }
    }


}
