import { BASE_URL } from './constans';
import { MOVIES_URL } from './constans';
class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkPromiseReturn(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  _request(url, options) {
    return fetch(url, options).then(this._checkPromiseReturn);
  }

  getUserInfo() {
    return this._request(this._baseUrl + '/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }
  sendUserInfo(user) {
    return this._request(this._baseUrl + '/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(user),
    });
  }

  getSavedMovies(data) {
    return this._request(this._baseUrl + '/movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }

  saveMovies(data) {
    return this._request(this._baseUrl + '/movies', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${'https://api.nomoreparties.co'}${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: MOVIES_URL + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  }

  deleteMovies(movieId) {
    return this._request(this._baseUrl + `/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    });
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json;  character=UTF-8',
  },
});

export default mainApi;
