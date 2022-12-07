import './MainPage.scss'

const MainPage = () => {
  const imageUrl = 'https://picsum.photos/600/600'

  return (
    <div className='main-page'>
      <img src={imageUrl} alt='beautiful-random' className='image' />
      <p className='text'>Mauris aliquam blandit orci a ornare. Curabitur at finibus nibh. Nulla tempus risus quis sapien maximus ornare. Donec ante magna, facilisis fermentum condimentum eu, congue sit amet justo. Nulla vel quam elementum, elementum urna quis, dapibus lacus. In eu tristique ligula. Suspendisse auctor risus ut ipsum hendrerit tempor. In ut purus porttitor magna condimentum gravida eget sit amet ipsum. Ut facilisis diam ac sem dapibus, in dictum lacus sollicitudin. </p>
    </div>
  )
}

export default MainPage