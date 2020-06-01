import axios from 'axios'

const searchGifs = (query) => {
  // API key
  const key = "ここに Giphy API のキーを設定"
  // base URL
  const baseUrl = "https://api.giphy.com/v1/gifs/search"
  // limit
  const limit = 25
  // API request URL
  const reqUrl = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}rating=G`

  axios
    .get(reqUrl)
    .then(({ data: res }) => {
      console.log(res)
    })
}

export default searchGifs
