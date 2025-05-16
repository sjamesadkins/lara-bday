// list of music

const modules = import.meta.glob('/public/assets/music/*.mp3');

let music = [];

for (const path in modules) {
  modules[path]().then(() => {
    music.push(path.slice(22))
  })
}

export default music;