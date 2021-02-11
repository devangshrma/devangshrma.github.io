import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { Emoji } from '@components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">Interested?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm currently looking for new opportunities in software engineering with a focus on telco or
        general wireless networks following my graduation in May 2021.
      </p>

      <p>
        Anything else? My inbox is always open! Let me know if you want to grab coffee in mainland
        <Emoji symbol="☕" label="Hot Beverage" />.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Howdy!
      </a>
    </StyledContactSection>
  );
};

export default Contact;
