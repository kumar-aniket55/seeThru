import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data center">Welcome to </p>
            <h1 className="center"> {name} </h1>
            <p className="center">
            Our passion for creativity and attention to detail shines through in every piece
             we create. Whether it's vibrant key chains, personalized trinkets, or stunning home
              decor, our resin-crafted products
             are designed to add a touch of elegance and individuality to your daily life.
            </p>
            <NavLink className="center1" to="/products" >
              <Button >show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 100%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 8%;
      top: -2rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 60%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 8rem;
    }
    .center{
      text-align:center;
    }
    .center1{
      margin: auto;
  width: 50%;
  padding: 35%;
  
        
    }

    figure::after {
      display:none;
      content: "";
      width: 50%;
      height: 100%;
      left: 50%;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
    img{
      margin-left:20%;
    }
  }
`;

export default HeroSection;