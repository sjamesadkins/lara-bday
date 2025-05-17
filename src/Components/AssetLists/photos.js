// list of photos

const modules = import.meta.glob('/public/assets/photos/*.jpg');

let photos = [];

for (const path in modules) {
  modules[path]().then(() => {
    photos.push(path.slice(22))
  })
}

export default photos;