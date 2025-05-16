// list of videos

const modules = import.meta.glob('/public/assets/videos/*.mp4');

let videos = [];

for (const path in modules) {
  modules[path]().then(() => {
    videos.push(path.slice(22))
  })
}

export default videos