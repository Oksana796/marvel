class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=640d65202ab80558da3d0f8486820f86";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&offset=180&${this._apiKey}`
    );
  };

  getCharacter = (id) => {
    return this.getResource(
      `${this._apiBase}characters/1009211?${this._apiKey}`
    );
  };
}

export default MarvelService;
