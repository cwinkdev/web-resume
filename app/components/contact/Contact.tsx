import { useInView } from 'react-intersection-observer';
import ContactInfo from './ContactInfo';
import { useApp } from '@/app/hooks/useApp';
import { useEffect } from 'react';

const Contact = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state, setState } = useApp();
  useEffect(() => {
    if (inView) {
      setState((prevState) => ({
        ...prevState,
        currentSection: 'contact',
      }));
    }
  }, [inView, state.currentSection]);

  return (
    <section
      ref={ref}
      id="contact"
      className={`${
        inView ? 'slide-in-right' : 'slide-off-left'
      }  p-8 pt-20 min-h-fit h-screen w-full text-center text-baseText lg:w-1/2 lg:mx-auto`}
    >
      <div
        style={{
          backgroundImage:
            state.theme.id === 'theme1' ? 'url(./abstractCardBG.png)' : '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`${
          state.theme.id === 'theme1'
            ? 'border border-base3 rounded-sm'
            : state.theme.id === ''
            ? 'border-y border-secondary rounded-xl'
            : 'border-y border-secondary rounded-2xl'
        }  bg-base rounded-lg shadow-md shadow-baseShadow`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
