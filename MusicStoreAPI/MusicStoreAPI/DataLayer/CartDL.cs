using System.Data.SqlClient;
using System.Data;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.DataLayer
{
    public class CartDL
    {
        private readonly string _connString;

        public CartDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }

        public IList<CartDTO> getCartItems(long userId)
        {
            try
            {
                IList<CartDTO> list = new List<CartDTO>();

                SqlConnection sqlConnection = new SqlConnection();
                sqlConnection.ConnectionString = _connString;
                sqlConnection.Open();

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "Select c.CartID,cu.UserID,a.AlbumName,c.Quantity,i.PriceAfterDiscount from dbo.cart  as c inner join dbo.customer as cu on cu.CustomerID = c.CustomerID inner join dbo.album as a on a.AlbumID = c.AlbumID inner join Inventory as i on i.OutletID = c.OutletID and i.AlbumID = c.AlbumID where cu.UserID= @userId";
                cmd.Parameters.AddWithValue("@userId", userId);
                cmd.CommandType = CommandType.Text;

                var cReader = cmd.ExecuteReader();
                while (cReader.Read())
                {
                    CartDTO model = new CartDTO
                    {
                        CartID = Convert.ToInt64(cReader["CartID"]),
                        AlbumName = Convert.ToString(cReader["AlbumName"]),
                        UserID = Convert.ToInt64(cReader["UserID"]),
                        Quantity = Convert.ToInt32(cReader["Quantity"]),
                        PriceAfterDiscount = Convert.ToDouble(cReader["PriceAfterDiscount"]),
                    };
                    list.Add(model);
                }

                return list;
            }
            catch (Exception ex)
            {
                return null;
            }
}

    }
}
