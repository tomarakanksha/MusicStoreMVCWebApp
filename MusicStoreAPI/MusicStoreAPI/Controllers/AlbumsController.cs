using Microsoft.AspNetCore.Mvc;
using MusicStoreAPI.DataLayer;
using MusicStoreAPI.DTO;

namespace MusicStoreMVCebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumsController : ControllerBase
    {
        private readonly AlbumDL _albums;

        public AlbumsController(AlbumDL albums )
        {
            _albums = albums;
        }

        [HttpGet("GetAlbums")]
        public IEnumerable<AlbumDTO> Get()
        {
            
            return _albums.GetAllAlbums();
        }

        [HttpGet("GetSongsByAlbumId")]
        public IEnumerable<SongDTO> GetSongsByAlbumId([FromQuery] Int64 id)
        {
            return _albums.GetSongsByAlbumId(id);
        }


    }
}
