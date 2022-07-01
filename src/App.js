import React, { useEffect } from 'react'
import './App.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'id',
    name: 'Indonesia',
    country_code: 'id',
  },
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const releaseDate = new Date('2021-03-07')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <div className='bg-custom bg-custom-blue'>
      <header className='flex flex-row-reverse p-4 top right-0 fixed'>
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
          <select defaultValue={currentLanguageCode} onClick={(e) => { i18next.changeLanguage(e.target.value) }} className="bg-transparent p-2 rounded">
            {languages.map(({ code, name, country_code }) => (
              <option key={country_code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </header >
      {/* michi macha */}
      <section className=' text-center md:px-24 px-8 pt-16'>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Michi</h1>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Macha</h1>
        <p className='text-custom-gray text-2xl font-bubblegumSans md:py-12 md:px-36'>
        {t('description')}
        </p>
        <h1 className='text-4xl text-custom-blue font-bubblegum text-stroke'>MINT SOON</h1>
      </section>

      {/* story */}
      <section className='flex flex-col md:flex-row mt-24 gap-8 md:px-24 px-8 '>
        <div className='w-full'>
          <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold'>{t('story')}</h1>
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
