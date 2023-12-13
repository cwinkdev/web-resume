import { useInView } from 'react-intersection-observer';
import ContactInfo from './ContactInfo';
import { useApp } from '@/app/hooks/useApp';

const Contact = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  const { state } = useApp();

  return (
    <section
      ref={ref}
      id="contact"
      className={`${
        inView ? 'slide-in-right' : 'slide-off-left'
      }  p-8 pt-20 min-h-fit h-screen w-full text-center text-baseText`}
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
            ? 'border border-base3'
            : 'border-y border-secondary'
        }  bg-base rounded-lg shadow-md shadow-baseShadow`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
