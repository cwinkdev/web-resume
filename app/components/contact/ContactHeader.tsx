'use client';

import { useInView } from 'react-intersection-observer';

const ContactHeader = () => {
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div
      ref={ref}
      className={`${
        inView ? 'slide-in-left' : 'disappear'
      } text-3xl font-semibold text-primary`}
    ></div>
  );
};

export default ContactHeader;
