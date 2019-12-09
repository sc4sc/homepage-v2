import FontFaceObserver from 'fontfaceobserver'

export default function Font() {
  const link = document.createElement('link')
  link.href = "https://fonts.googleapis.com/css?family=Cabin&display=swap"
  link.rel = "stylesheet"

  document.head.appendChild(link)

  const cabin = new FontFaceObserver('Cabin')

  cabin.load().then(() => {
    document.documentElement.classList.add('Cabin')
  })
}