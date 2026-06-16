import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full mx-auto'>

      {/* ── Desktop layout: full-screen with canvas as background ── */}
      <div className='hidden sm:block relative h-screen'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 h-80 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I&apos;m <span className='text-[#915eff]'>Vishwa</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop MERN stack applications, SPFx web parts,{' '}
              <br className='block' />
              and scalable front-end solutions with modern web technologies.
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>

      {/* ── Mobile layout: text on top, model below ── */}
      <div className='flex sm:hidden flex-col w-full pt-[90px] pb-6'>
        {/* Text block */}
        <div className={`${styles.paddingX} flex flex-row items-start gap-4`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 h-24 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I&apos;m <span className='text-[#915eff]'>Vishwa</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop MERN stack applications, SPFx web parts,
              and scalable front-end solutions with modern web technologies.
            </p>
          </div>
        </div>

        {/* 3D Model below text */}
        <div className='w-full h-[320px] mt-1'>
          <ComputersCanvas />
        </div>

        {/* Scroll indicator */}
        <div className='w-full flex justify-center items-center mt-4'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;