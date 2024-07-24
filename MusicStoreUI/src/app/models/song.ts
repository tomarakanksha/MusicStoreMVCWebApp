export class Song {
    constructor(
        public songId :number,
        public albumId:number,
        public albumName :string,
        public artistName :string,
        public genreName :string,
        public songName:string,
        public refDemoFilePath :string,
    ){}
}
