import styled from "styled-components";
import { useUserContext } from "./context/userContext";

const Contact = () => {
   const {username,email} = useUserContext();
   console.log(email);
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.media.mobile}){
      input[type="submit"]{
        margin-left:30%;
      }
    }
    .lower{
      text-transform: lowercase;
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.669524662962!2d77.07315217443687!3d28.669612275644493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d044308cd33b3%3A0xcbe56bfc0e098842!2sRZC-103%2C%20Nihal%20Vihar%2C%20Vandana%20Vihar%2C%20Nangloi%2C%20Delhi%2C%20110041!5e0!3m2!1sen!2sin!4v1695976127622!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mdorpkrg"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              value={username}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              value={email}
              className="lower"
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;