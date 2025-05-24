// list of photos

const modules = import.meta.glob('/public/assets/photos/*.jpg');

let photos = [];

for (const path in modules) {
  modules[path]().then(() => {
    // let p = path.slice(22)
    // let mod_p = 
    photos.push(path.slice(22, -4))
  })
}

photos.sort((a, b) => {

return Number(a) - Number(b);

});

export default photos;