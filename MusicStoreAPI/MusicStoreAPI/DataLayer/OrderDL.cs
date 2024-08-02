using System.Data.SqlClient;
using System.Data;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.DataLayer
{
    public class OrderDL
    {
        private readonly string _connString;

        public OrderDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }

        public long CreateOrder(OrderItemsDTO model, out string orderNum)
        {
            int orderid = -1;
            orderNum = "";
            try
            {
                SqlConnection sqlConnection = new SqlConnection();
                sqlConnection.ConnectionString = _connString;
                sqlConnection.Open();

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "prcCreateOrder";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.Add("@UserId", SqlDbType.Int).Value = model.UserId;

                DataTable cartItemsTable = new DataTable();
                cartItemsTable.Columns.Add("CartId", typeof(long));
                cartItemsTable.Columns.Add("Quantity", typeof(int));

                foreach (var item in model.CartItemsList)
                {
                    cartItemsTable.Rows.Add(item.CartID, item.Quantity);
                }

                SqlParameter tvpParam = cmd.Parameters.Add("@CartItems", SqlDbType.Structured);
                tvpParam.TypeName = "dbo.CartItemType";
                tvpParam.Value = cartItemsTable;

                SqlParameter orderIdParam = cmd.Parameters.Add("@OrderId", SqlDbType.Int);
                orderIdParam.Direction = ParameterDirection.Output;
                SqlParameter orderNumParam = cmd.Parameters.Add("@OrderNum", SqlDbType.VarChar, 11);
                orderNumParam.Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                orderid = (int)orderIdParam.Value;
                orderNum = orderNumParam.Value.ToString();
                if (orderid > -1)
                {
                    return orderid;
                }
                else
                {
                    return 0;
                }
            }
            catch (Exception ex)
            {

                return orderid;
            }
        }

        public int CompleteOrder(long orderId, string paymentMode)
        {
            try
            {
                SqlConnection sqlConnection = new SqlConnection();
                sqlConnection.ConnectionString = _connString;
                sqlConnection.Open();

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "prcPayment";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.Add("@OrderId", SqlDbType.Int).Value = orderId;
                cmd.Parameters.Add("@PaymentMode", SqlDbType.VarChar,20).Value = paymentMode;

                cmd.ExecuteNonQuery();

                return 1;
            }
            catch (Exception ex)
            {

                return -1;
            }
        }

        public IList<OrderDetailDTO> GetOrderSummary(int orderid)
        {
            IList<OrderDetailDTO> list = new List<OrderDetailDTO>();

            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "Select o.OrderId,o.OrderNum,cu.BillingAddr,cu.ShippingAddr,a.AlbumName,od.SalesPrice from dbo.orders o Inner join dbo.Customer cu on o.CustomerID = cu.CustomerID inner join dbo.OrderDetails od on od.OrderID = o.OrderID  Inner join dbo.Album a on a.AlbumID = od.AlbumID where o.orderId = @orderid;";
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add("@orderid", SqlDbType.Int).Value = orderid;

            var cReader = cmd.ExecuteReader();
            while (cReader.Read())
            {
                OrderDetailDTO model = new OrderDetailDTO
                {
                    OrderId = Convert.ToInt64(cReader["OrderId"]),
                    OrderNum = Convert.ToString(cReader["OrderNum"]),
                    BillingAddr = Convert.ToString(cReader["BillingAddr"]),
                    ShippingAddr = Convert.ToString(cReader["ShippingAddr"]),
                    AlbumName = Convert.ToString(cReader["AlbumName"]),
                    Price = Convert.ToDouble(cReader["SalesPrice"]),
                 };
                list.Add(model);
            }

            return list;
        }

    }
}
