using System.Data.SqlClient;
using System.Data;
using MusicStoreAPI.DTO;

namespace MusicStoreAPI.DataLayer
{
    public class AlbumDL
    {
        private readonly string _connString;

        public AlbumDL(IConfiguration config)
        {
            _connString = config["ConnectionStrings:sconstringwin"];
        }

        public IList<AlbumDTO> GetAllAlbums()
        {
            IList<AlbumDTO> list = new List<AlbumDTO>();

            SqlConnection sqlConnection = new SqlConnection();
            sqlConnection.ConnectionString = _connString;
            sqlConnection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = sqlConnection;
            cmd.CommandText = "Select * from dbo.vwAvailableAlbums;";
            cmd.CommandType = CommandType.Text;

            var cReader = cmd.ExecuteReader();
            while (cReader.Read())
            {
                AlbumDTO model = new AlbumDTO
                {
                    AlbumId = Convert.ToInt64(cReader[0]),
                    AlbumName = Convert.ToString(cReader[1]),
                    OutletID = Convert.ToInt64(cReader[2]),
                    OutletName = Convert.ToString(cReader[3]),
                    Discount = Convert.ToDouble(cReader[4]),
                    PriceAfterDiscount = Convert.ToDouble(cReader[5]),
                };
                list.Add(model);
            }

            return list;
        }

        public IList<SongDTO> GetSongsByAlbumId(long id)
        {
            IList<SongDTO> songDetails = new List<SongDTO>();
            try
            {
                SqlConnection sqlConnection = new SqlConnection();
                sqlConnection.ConnectionString = _connString;
                sqlConnection.Open();

                SqlCommand cmd = new SqlCommand();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "Select * from dbo.vwSongDetails where albumid = @albumid;";
                cmd.Parameters.AddWithValue("@albumid", id);
                cmd.CommandType = CommandType.Text;

                var cReader = cmd.ExecuteReader();
                while (cReader.Read())
                {
                    var song = new SongDTO();
                    {
                        song.SongId = Convert.ToInt64(cReader["SongID"]);
                        song.AlbumId = Convert.ToInt64(cReader["AlbumID"]);
                        song.AlbumName = Convert.ToString(cReader["AlbumName"]);
                        song.ArtistName = Convert.ToString(cReader["ArtistName"]);
                        song.GenreName = Convert.ToString(cReader["GenreName"]);
                        song.SongName = Convert.ToString(cReader["SongName"]);
                        song.RefDemoFilePath = Convert.ToString(cReader["RefDemoFilePath"]);
                    }
                    songDetails.Add(song);
                }

                return songDetails;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
