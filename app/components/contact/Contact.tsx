import { useInView } from 'react-intersection-observer';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const options = { threshold: 0.2 };
  const { ref, inView } = useInView(options);
  return (
    <section
      ref={ref}
      id="contact"
      className={`p-8 pt-20 h-screen w-full text-center text-baseText`}
    >
      <div
        className={`${
          inView ? 'slide-in-right' : 'slide-off-left'
        } border-secondary bg-base rounded-lg border-y shadow-md shadow-black`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
