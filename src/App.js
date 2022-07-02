import React, { useEffect } from 'react'
import './App.css';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'

const languages = [
  {
    code: 'en',
    name: 'EN',
    country_code: 'gb',
  },
  {
    code: 'id',
    name: 'ID',
    country_code: 'id',
  },
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

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
          <select defaultValue={currentLanguageCode} onClick={(e) => { i18next.changeLanguage(e.target.value) }} className="bg-transparent p-2 rounded font-bubblegumSans">
            {languages.map(({ code, name, country_code }) => (
              <option key={country_code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </header >
      {/* michi macha */}
      <section className=' text-center md:px-24 px-8 pt-20'>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Michi</h1>
        <h1 className='text-7xl text-custom-blue font-bubblegum text-stroke-bold'>Macha</h1>
        <p className='text-custom-gray text-2xl font-bubblegumSans md:pt-16 md:px-36'>
          {t('description')}
        </p>
        <div>
          <img src='/img/soon.svg' alt='whitepaper' className='mx-auto' />
          <a href='https://google.com' target="_blank" rel="noreferrer" > <h1 className=' text-4xl text-custom-blue font-bubblegum text-stroke md:-mt-56 -mt-28'>{t('mint_soon')}</h1></a>
        </div>
      </section>

      {/* story */}
      <section className='flex flex-col md:flex-row mt-40 gap-8 md:px-24 px-8 '>
        <div className='w-full'>
          <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold'>{t('story')}</h1>
          <p className='text-custom-gray text-2xl font-bubblegumSans py-4 '>{t('story_desc')}</p>
        </div>
        <div className='flex md:w-1/2'>
          <img src='/img/story.svg' alt='story' />
        </div>
      </section>

      {/*   my michis machas */}
      <section className='mt-24 md:px-24 px-8 '>
        <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center'>{t('my_michis_machas')}</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full'>
            <img src='/img/cute.svg' alt='cute' />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cute</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>{t('my_michis_machas_desc')}
            </p>
          </div>
          <div className='w-full'>
            <img src='/img/cuter.svg' alt='cute' />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cuter</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>{t('my_michis_machas_desc')}
            </p>
          </div>
          <div className='w-full'>
            <img src='/img/cutest.svg' alt='cute' className='w-full' />
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>Cutest</h1>
            <p className='text-custom-gray text-2xl font-bubblegumSans'>{t('my_michis_machas_desc')}
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
            <h1 className='text-custom-red text-stroke font-bubblegum text-4xl'>{t('include')}</h1>
            <ul className='text-custom-gray text-2xl font-bubblegumSans'>
              <li className='list-disc'>{t('include_desc')}</li>
              <li className='list-disc'>{t('include_desc')}</li>
              <li className='list-disc'>{t('include_desc')}</li>
              <li className='list-disc'>{t('include_desc')}</li>
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
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>{t('phase')} 1</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='border-2 rounded-lg border-custom-red'>
              <div className='w-full border-2 border-custom-red rounded-lg p-8 bg-gradient-to-b from-custom-red -rotate-6'>
                <div className='rotate-6'>
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>{t('phase')} 2</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div className='border-2 rounded-lg border-custom-red'>
              <div className='w-full border-2 border-custom-red rounded-lg p-8 bg-gradient-to-b from-custom-red -rotate-6'>
                <div className='rotate-6'>
                  <h1 className='text-custom-blue text-stroke font-bubblegum text-center text-4xl'>{t('phase')} 3</h1>
                  <ul className='text-custom-gray text-2xl font-bubblegumSans'>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                    <li className='list-disc'>{t('phase_desc')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Team */}
      <section className='mt-24 md:px-24 px-8 '>
        <h1 className='text-7xl text-custom-yellow font-bubblegum text-stroke-bold text-center py-4'>{t('team')}</h1>
        <div className='flex flex-col md:-px-24 md:flex-row'>
          <div className='w-full'>
            <img src='/img/team.svg' alt='team' />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <div className='flex my-2 gap-4'>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='my-auto text-custom-red text-stroke'><img src='/icons/linkedin.svg' alt='linkedin' /></a>
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='text-custom-red text-stroke'>Cuter,</a> {t('team_desc')}</p>
            </div>
            <div className='flex my-2 gap-4'>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='my-auto text-custom-red text-stroke'><img src='/icons/linkedin.svg' alt='linkedin' /></a>
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='text-custom-red text-stroke'>Cuter2,</a> {t('team_desc')}</p>
            </div>
            <div className='flex my-2 gap-4'>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='my-auto text-custom-red text-stroke'><img src='/icons/linkedin.svg' alt='linkedin' /></a>
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='text-custom-red text-stroke '>Cuter3,</a> {t('team_desc')}</p>
            </div>
            <div className='flex my-2 gap-4'>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='my-auto text-custom-red text-stroke'><img src='/icons/linkedin.svg' alt='linkedin' /></a>
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='text-custom-red text-stroke '>Cuter4,</a> {t('team_desc')}</p>
            </div>
            <div className='flex my-2 gap-4'>
              <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='my-auto text-custom-red text-stroke'><img src='/icons/linkedin.svg' alt='linkedin' /></a>
              <p className='text-stroke font-bubblegum text-custom-blue text-3xl'>
                <a href='https://linkedin.com' target="_blank" rel="noreferrer" className='text-custom-red text-stroke'>Cuter5,</a> {t('team_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* whitepaper */}
      <section className='mt-24 md:px-24 px-8 '>
        <div>
          <img src='/img/whitepaper.svg' alt='whitepaper' className='mx-auto' />
          <a href='https://google.com' target="_blank" rel="noreferrer" >
            <h1 className='text-4xl md:text-7xl text-white font-bubblegum md:-mt-48 -mt-28 md:text-stroke-bold-blue text-stroke-blue text-center py-4'>Whitepaper</h1>
          </a>
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
          <p className='text-center font-bold font-bubblegumSans mt-2'>@ 2022 Michi Macha | <a href='https://google.com' target="_blank" rel="noreferrer" > {t('policy')} </a> | <a href='https://google.com' target="_blank" rel="noreferrer" > {t('tnc')} </a></p>
        </div>
      </section>
    </div >
  );
}

export default App;
