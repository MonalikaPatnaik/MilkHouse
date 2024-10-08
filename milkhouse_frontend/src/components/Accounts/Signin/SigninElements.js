import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  min-height: 692px;
  padding-top: 150px;
  padding-bottom: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: var(--bg-clr);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icons = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 580px) {
    padding: 10px 20px;
  }
`;

export const Form = styled.form`
  background: linear-gradient(45deg, #000000 30%, rgb(162 91 54) 90%);
  max-width: 550px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 20px 32px;
    height: 81%;
  }
`;

export const FormH1 = styled.label`
  margin-bottom: 40px;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 800;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const FormInput = styled.input`
  margin-bottom: 40px;
  padding: 10px;
  font-size: 18px;

  outline: none;
  background: #403126;
  :focus {
    border-bottom: 5px solid #403126;
    transition: opacity 0.4s ease;
    box-shadow: 1px 2px 10px #403126;
  }
  :invalid {
    border-bottom: 5px solid red;
  }
  @media screen and (max-width: 435px) {
    font-size: 14px;
  }
`;

export const FormButton = styled.button`
  background: #403126;
  padding: 16px 10px;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: opacity 0.25s ease;
  }
  :active {
    background: #fff;
    color: #403126;
    opacity: 1;
    border: 2px solid #01bf71;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  height:88vh;
  display: flex;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
    margin: 0;
  
}
`;

export const SignInContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  @media only screen and (max-width:550px){
    width: 100%;
    margin : 3rem auto;
}
`;

export const RightContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #000000 30%, rgb(162 91 54) 90%);
  min-height: 100%;
  @media only screen and (max-width:550px){
    width: 100%;
  }
`;

export const SignInForm = styled.form`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignInButton = styled.button`
  width: 7.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  border-radius: 30px;
  background: linear-gradient(45deg, #000000 30%, rgb(162 91 54) 90%);
  white-space: nowrap;
  color: #fff;
  margin-top: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: 8px;

  &:hover {
    background:#f7bd00;
    color: #000;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const RightHeading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
`;

export const RightPara = styled.p`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #ffffff;
  margin-top: 0.4rem;
  width: 70%;
  text-align: center;
`;

export const SignInh1 = styled.h1`
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 4rem;
  margin-top: 1.5rem;
  color: #403126;
`;

export const SignInLabel = styled.label`
  text-align: left;
  width: 70%;
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  color: #403126;
`;

export const SignInInput = styled.input`
  width: 70%;
  padding: 0.7rem;
  border-radius: 20px;
  border: None;
  background: rgb(255 179 104 / 57%);
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.8rem;
  color: Black;
  margin-bottom: 1rem;
  outline: none;
  box-sizing: border-box;
  border: 1px solid transparent;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    border: 1px solid #ed730e;
  }

  &:focus {
    border-radius: 20px;
    border: 2px solid #ed730e;
  }
`;

export const CheckBox = styled.input`
  margin-right: 0.5rem;
`;

export const RememberMe = styled.div`
  display: flex;
  margin-bottom: 1rem;
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    color: #1e1e1e;
  }
`;

export const ForgotPassword = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #1e1e1e;
 text-align:right;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 70%;
`;

 export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
 
  width: 50%; /* Takes full width */
  
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc; /* Line style */
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }
`;

export const SeparatorText = styled.span`
  font-size: 16px;
  color: rgb(150 144 144); /* Gray text color */
`;

export const NewAccount = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 2rem;
  color: #403126;
`;


export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Image = styled.img`

  animation: moveUpDown 2s ease-in-out infinite;
  width:80%;
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const Error = styled.b`
  font-weight: bold;
  font-size: 1rem;
  color: #ff3300;
`;
export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const RadioLabel = styled.label`
  margin-right: 20px;
  margin-bottom:0px;
  cursor: pointer;
  font-size: 1rem;
`;