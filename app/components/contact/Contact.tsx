import ContactInfo from './ContactInfo';
import { useApp } from '@/app/hooks/useApp';

const Contact = () => {
  const { state } = useApp();

  return (
    <section
      className={`${
        state.currentSection === 'contact' ? 'slide-in-right' : 'disappear'
      }  p-8 pt-20 min-h-screen h-screen w-full text-center text-baseText lg:w-1/2 lg:mx-auto my-24`}
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
            ? 'border border-base3 rounded-sm bg-gradient-radial from-base2 to-base1'
            : state.theme.id === ''
            ? 'border-y border-secondary rounded-xl bg-gradient-radial from-base2 to-base1'
            : 'border-y border-secondary rounded-2xl bg-base'
        }  rounded-lg shadow-md shadow-baseShadow`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
