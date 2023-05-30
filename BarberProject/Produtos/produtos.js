const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('litransformed');
      }
    });

    item.classList.toggle('litransformed');
  });
});
