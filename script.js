document.addEventListener('DOMContentLoaded', function() {
  const contactBtn = document.getElementById('contactBtn');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  if (contactBtn && modal && closeModal) {
    contactBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
