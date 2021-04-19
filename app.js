const form = document.querySelector('#searchForm')
const div = document.querySelector('.container')
form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log()
    div.innerHTML = ''
    makeImages(res.data)
    form.elements.query.value = ''
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG')
            img.src = result.show.image.medium
            div.append(img)
        }
    }
}