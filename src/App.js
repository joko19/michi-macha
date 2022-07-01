import React, { useEffect } from 'react'
import './App.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

const languages = [
  {
    code: 'id',
    name: 'Indonesia',
    country_code: 'id',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
]

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const releaseDate = new Date('2021-03-07')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <div className='bg-custom bg-custom-blue'>
      <header className='flex flex-row-reverse p-4'>
        <div className='flex'>
          <a href='https://discord.com/' target='_blank' className='my-auto' rel="noreferrer">
            <img src='icons/discord.svg' alt='icon discord' className='w-10 h-10' />
          </a>
          <a href='https://twitter.com/' target='_blank' className='my-auto' rel="noreferrer">
            <img src='icons/twitter.svg' alt='icon twitter' className='w-10 h-10' />
          </a>
          <a href='https://www.instagram.com/' target='_blank' className='my-auto' rel="noreferrer">
            <img src='icons/instagram.svg' alt='icon instagram' className='w-10 h-10' />
          </a>
          <img src='icons/language.svg' alt='icon language' className='my-auto py-auto pl-2 mr-2 w-10 h-10' />
          <select onChange={(e) => { i18next.changeLanguage(e.target.value) }} className="bg-transparent p-2 rounded">
            {languages.map(({ code, name, country_code }) => (
              <option key={country_code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </header >
      
      {/* michi macha */}
      <section className=' text-center md:px-24 px-8 '>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Michi</h1>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Macha</h1>
        <p className='text-custom-gray text-2xl font-bubblegumSans md:py-12 md:px-36'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <h1 className='text-4xl text-custom-blue font-bubblegum text-stroke'>MINT SOON</h1>
      </section>

      {/* story */}
      <section className='flex flex-col md:flex-row mt-24 gap-8 md:px-24 px-8 '>
        <div className='w-full'>
          <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold'>Story</h1>
          <p className='text-custom-gray text-2xl font-bubblegumSans py-4 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className='flex md:w-1/2'>
          <img src='/img/story.svg' alt='story' />
        </div>
      </section>

      {/*   my michis machas */}
      <section className='mt-24 md:px-24 px-8 '>
        <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center'>My Michis Machas</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full'>
            <img src='/img/cute.svg' alt='cute' />
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

      {/* Utility */}
      <section className='mt-24'>
        <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center py-4'>Utility</h1>
        <div className='flex flex-col md:-px-24 md:flex-row'>
          <div className='w-full'>
            <img src='/img/utility-1.svg' alt='utility 1' />
            <img src='/img/utility-2.svg' alt='utility 2' />
            <img src='/img/utility-3.svg' alt='utility 3' />
          </div>
          <div className='w-full md:w-1/2 p-12 md:p-4'>
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Include</h1>
            <ul className='text-custom-gray text-2xl font-bubblegumSans'>
              <li className='list-disc'>amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute laboris nisi ut  commodo consequat. </li>
              <li className='list-disc'>amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute laboris nisi ut  commodo consequat. </li>
              <li className='list-disc'>amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute laboris nisi ut  commodo consequat. </li>
              <li className='list-disc'>amco laboris nisi ut aliquip ex ea commodo consequat. Duis aute laboris nisi ut  commodo consequat. </li>
            </ul>
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section className='mt-24 md:px-24 px-4 '>
        <h1 className='text-7xl md:text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center'>Roadmap</h1>
        <div className='flex flex-col md:flex-row gap-4 mt-8'>
          <div className='p-4'>
            <div className='border-2 rounded-lg border-custom-red'>
              <div className='w-full border-2 border-custom-red rounded-lg p-8 bg-gradient-to-b from-custom-red -rotate-6'>
                <div className='rotate-6'>
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>Phase 1</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='border-2 rounded-lg border-custom-red'>
              <div className='w-full border-2 border-custom-red rounded-lg p-8 bg-gradient-to-b from-custom-red -rotate-6'>
                <div className='rotate-6'>
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>Phase 2</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='border-2 rounded-lg border-custom-red'>
              <div className='w-full border-2 border-custom-red rounded-lg p-8 bg-gradient-to-b from-custom-red -rotate-6'>
                <div className='rotate-6'>
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>Phase 3</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                    <li className='list-disc'>amco laboris nisi ut aliquip ex ea. Duis aute laboris nisi ut  commodo consequat. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className='mt-24 md:px-24 px-8 '>
        <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center py-4'>Team</h1>
        <div className='flex flex-col md:-px-24 md:flex-row'>
          <div className='w-full'>
            <img src='/img/team.svg' alt='team' />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <div className='flex my-2 gap-4'>
              <img src='/icons/linkedin.svg' alt='linkedin' />
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <span className='text-custom-red '>Cuter,</span> THE MOST CUTE MAN YOU'VE EVER HEARD</p>
            </div>
            <div className='flex my-2 gap-4'>
              <img src='/icons/linkedin.svg' alt='linkedin' />
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <span className='text-custom-red '>Cuter2,</span> THE MOST CUTE MAN YOU'VE EVER HEARD</p>
            </div>
            <div className='flex my-2 gap-4'>
              <img src='/icons/linkedin.svg' alt='linkedin' />
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <span className='text-custom-red '>Cuter3,</span> THE MOST CUTE MAN YOU'VE EVER HEARD</p>
            </div>
            <div className='flex my-2 gap-4'>
              <img src='/icons/linkedin.svg' alt='linkedin' />
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <span className='text-custom-red '>Cuter4,</span> THE MOST CUTE MAN YOU'VE EVER HEARD</p>
            </div>
            <div className='flex my-2 gap-4'>
              <img src='/icons/linkedin.svg' alt='linkedin' />
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <span className='text-custom-red '>Cuter5,</span> THE MOST CUTE MAN YOU'VE EVER HEARD</p>
            </div>
          </div>
        </div>
      </section>

      {/* whitepaper */}
      <section className='mt-24 md:px-24 px-8 '>
        <div>
          <img src='/img/whitepaper.svg' alt='whitepaper' className='mx-auto' />
          <h1 className='text-4xl md:text-7xl text-white font-bubblegum md:-mt-48 -mt-28 md:text-stroke-bold-blue text-stroke-blue text-center py-4'>Whitepaper</h1>
        </div>
      </section>

      <section className=''>
        <img src='/img/footer.svg' alt='footer' />
        <div className='grid justify-self-center -mt-24 md:-mt-32'>
          <div className='flex justify-self-center mx-auto px-auto'>
            <a href='https://discord.com/' target='_blank' className='my-auto' rel="noreferrer">
              <img src='icons/discord-solid.svg' alt='icon discord' />
            </a>
            <a href='https://twitter.com/' target='_blank' className='my-auto' rel="noreferrer">
              <img src='icons/twitter-solid.svg' alt='icon twitter' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' className='my-auto' rel="noreferrer">
              <img src='icons/instagram-solid.svg' alt='icon instagram' />
            </a>
          </div>
          <p className='text-center font-bold font-bubblegumSans mt-2'>@ 2022 Michi Macha | <a href="#">Privacy Policy
          </a>  | <a href="#"> Terms and Conditions </a></p>
        </div>
      </section>
    </div >
  );
}

export default App;
