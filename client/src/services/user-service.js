const userService = {
  logout: function () {
    return fetch(`http://localhost:8080/api/user/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.text());
  }

};

export default userService;