const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getData = () => {
  fetch('./data/posts.json')
    .then((res) => res.json())
    .then((data) => {
      const size = data.posts.length - 1;
      setTimeout(() => {
        window.location.assign(data.posts[getRandomArbitrary(0, size)].url);
      }, 1500);
    })
    .catch((err) => console.error(err));
};

getData();
