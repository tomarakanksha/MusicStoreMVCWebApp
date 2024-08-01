using Microsoft.AspNetCore.Mvc.ModelBinding;
using MusicStoreAPI.DTO;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Numerics;
using System.Reflection;
using System.Xml.Linq;

namespace MusicStoreAPI.DataLayer
{
    public class CustomerDL
    {
        private readonly string _connString;

        public CustomerDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }
        public IList<CustomerDTO> GetAllCustomers()
        {
            IList<CustomerDTO> list = new List<CustomerDTO>();

            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "Select * from dbo.vwGetAllCustomers;";
            cmd.CommandType = System.Data.CommandType.Text;

            var cReader = cmd.ExecuteReader();
            while (cReader.Read())
            {
                CustomerDTO model = new CustomerDTO
                {
                    CustomerId = Convert.ToInt64(cReader[0]),
                    FName = Convert.ToString(cReader[1]),
                    LName = Convert.ToString(cReader[2]),
                    ShippingAddr = Convert.ToString(cReader[3]),
                    BillingAddr = Convert.ToString(cReader[4]),
                    CustomerCategory = Convert.ToString(cReader[5]),
                    Phone = Convert.ToString(cReader[6]),
                };
                list.Add(model);
            }

            return list;
        }

        public CustomerDTO GetCustomerByID(int id)
        {
            var model = new CustomerDTO();
            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "Select top 1 * from dbo.Customer c inner join dbo.Users u on c.UserID=u.UserID where c.UserID = @UserID;";
            cmd.Parameters.AddWithValue("@UserID", id);
            cmd.CommandType = System.Data.CommandType.Text;

            var cReader = cmd.ExecuteReader();
            while (cReader.Read())
            {
                model.CustomerId = Convert.ToInt64(cReader["CustomerId"]);
                model.FName = Convert.ToString(cReader["FName"]);
                model.LName = Convert.ToString(cReader["LName"]);
                model.EmailId = Convert.ToString(cReader["EmailID"]);
                model.ShippingAddr = Convert.ToString(cReader["ShippingAddr"]);
                model.BillingAddr = Convert.ToString(cReader["BillingAddr"]);
                model.CustomerCategory = Convert.ToString(cReader["CustomerCategory"]);
                model.Phone = Convert.ToString(cReader["Phone"]);
                model.Password = Convert.ToString(cReader["Password"]);
            }

            return model;
        }
        public int RegisterCustomer(RegisterDTO model)
        {
            long userId = 0;
            try
            {
                SqlConnection sqlConnection = new SqlConnection();
                sqlConnection.ConnectionString = _connString;
                sqlConnection.Open();

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "prcRegisterUser";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@FName", model.FName));
                cmd.Parameters.Add(new SqlParameter("@LName", model.LName));
                cmd.Parameters.Add(new SqlParameter("@emailID", model.Emailid));
                cmd.Parameters.Add(new SqlParameter("@Password", model.Password));
                cmd.Parameters.Add(new SqlParameter("@Phone", model.Phone));
                cmd.Parameters.Add(new SqlParameter("@UserType", "C"));
                cmd.Parameters.Add(new SqlParameter("@Active", true));
                cmd.Parameters.Add(new SqlParameter("@ShippingAddr", model.ShippingAddr));
                cmd.Parameters.Add(new SqlParameter("@BillingAddr", model.BillingAddr));
                cmd.Parameters.Add(new SqlParameter("@CustomerCategory", model.CustomerCategory));
                cmd.Parameters.Add(new SqlParameter("@verificationID", model.IdUpload));
                cmd.Parameters.Add(new SqlParameter("@Department", ""));

                cmd.Parameters.Add("@userId", SqlDbType.Int);
                cmd.Parameters["@userId"].Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();
                userId = Convert.ToInt64(cmd.Parameters["@userId"].Value);
                if (userId > 0)
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
            catch(Exception ex)
            {

            return -1; }
        }

    }
}