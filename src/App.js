import './App.css';

function App() {
  return (
    <div className='bg-custom px-8 md:px-24 bg-custom-blue'>
      <header className='flex flex-row-reverse'>
        <div className='flex'>
          <img src='icons/discord.svg' alt='icon discord' />
          <img src='icons/twitter.svg' alt='icon twitter' />
          <img src='icons/instagram.svg' alt='icon instagram' />
        </div>
      </header>
      {/* michi macha */}
      <section className=' text-center  '>
        <h1 className='text-6xl text-custom-blue font-bubblegum text-stroke-bold'>Michi</h1>
        <h1 className='text-6xl text-custom-blue font-bubblegum text-stroke-bold'>Macha</h1>
        <p className='text-custom-gray text-2xl font-bubblegumSans text-lg md:py-12 md:px-36'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <h1 className='text-4xl text-custom-blue font-bubblegum text-stroke'>MINT SOON</h1>
      </section>
      {/* story */}
      <section className='flex mt-12 gap-8'>
        <div className='w-full'>
          <h1 className='text-6xl text-custom-yellow font-bubblegum text-stroke-bold'>Story</h1>
          <p className='text-custom-gray text-2xl font-bubblegumSans text-lg py-4 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='flex md:w-1/2'>
          <img src='/img/story.svg' alt='story' />
        </div>
      </section>
      {/*   my michis machas */}
      <section className='mt-12'>
        <h1 className='text-6xl text-custom-yellow font-bubblegum text-stroke-bold text-center'>My Michis Machas</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full'>
            <img src='/img/cute.svg' alt='cute'  />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cute</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className='w-full'>
            <img src='/img/cuter.svg' alt='cute' />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cuter</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className='w-full'>
            <img src='/img/cutest.svg' alt='cute' className='w-full' />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cutest</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
