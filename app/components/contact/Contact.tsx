import { useInView } from 'react-intersection-observer';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <section
      ref={ref}
      id="contact"
      className={`${
        inView ? 'slide-in-right' : 'slide-off-left'
      } p-8 pt-20 h-screen w-full text-center text-baseText`}
    >
      <div
        className={`border-secondary bg-base rounded-lg border-y shadow-md shadow-black`}
      >
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
