const render = (() => {
  document.querySelector('.form-back').onclick = () => sessionStorage.setItem('auth', 0);

  window.onload = async () => {
    sessionStorage.setItem('auth', 1);
    const id = +localStorage.getItem('auth') ? +localStorage.getItem('auth') : +sessionStorage.getItem('auth');

    if (id) {
      const { data: user } = await axios.get(`/users/${id}`);

      document.querySelector('.mypage-form-email > input').value = user.email;
      document.querySelector('.mypage-form-name > input').value = user.name;
      document.querySelector('.mypage-form-phone > input').value = user.phone;
    }
  };
})();

document.querySelector('.edit-profile-button').onclick = () => {
  window.location.href = '/mypage_edit.html';
};
