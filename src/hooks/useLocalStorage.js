import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(localStorage.getItem('id_token'));
  }

  loggedIn() {
    return !!localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  login(token) {
    localStorage.setItem('id_token', token);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

}

export default new AuthService();