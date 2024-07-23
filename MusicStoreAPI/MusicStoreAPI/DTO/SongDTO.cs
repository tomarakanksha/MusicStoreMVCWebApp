namespace MusicStoreAPI.DTO
{
    public class SongDTO
    {
        public long SongId { get; set; }
        public long AlbumId { get; set; }
        public string AlbumName { get; set; }
        public string ArtistName { get; set; }
        public string GenreName { get; set; }
        public string SongName { get; set; }
        public string RefDemoFilePath { get; set; }
    }
}
