class spider {
  constructor() {
    this.key = 'kSZoH21SOgg1GH07';
  }

  getTvStream(id) {
    return `https://videospider.in/getvideo?key=${
      this.key
    }&video_id=${id}&tmdb=1`;
  }
}
export default spider;

// First API Key: kSZoH21SOgg1GH07
// Second API Key: AhWLPUIlhYfa18fg
// Third API Key: 4VQ6XG7DQ6o6EhxC
