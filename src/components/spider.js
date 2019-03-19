class spider {
  constructor() {
    this.key = '4VQ6XG7DQ6o6EhxC';
  }

  getTvStream(id) {
    return `https://videospider.in/getvideo?key=${
      this.key
    }&video_id=${id}&tmdb=1`;
  }
}
export default spider;
