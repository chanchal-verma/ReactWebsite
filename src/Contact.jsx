import React, { useState , useEffect } from "react";
import Footer from './Footer'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Check } from "@material-ui/icons";

const Contact = () => {

  const [errors, setErrors] = useState({
      Fname : "",
      contact : "",
      email : "",
      message : ""
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const [details , newDetails] = useState({
      Fname : "",
      contact : "",
      email : "",
      message : ""
  })
let isValid ;
const InputEvent = (e)=>{
    const {name , value} = e.target;
    newDetails((oldDetails)=>{
        return {...oldDetails ,
                [name] : value }
    });
    isValid = formValidation(); 
}

const formSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
    if(isValid)
    {
      alert(`Thankyou ,${details.Fname} .Your contact:${details.contact} and email:${details.email} are saved in our database and we assure you that we will never share it and it will never be misused.`)
      newDetails({
        Fname : "",
        contact : "",
        email : "",
        message : ""
      })
      setErrors({
        Fname : "",
        contact : "",
        email : "",
        message : ""
      })
    }
}


const formValidation = ()=>{
  const Fname = document.getElementById('Fname');
  const contact = document.getElementById('contact');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const Check = document.getElementById('Check');



  const errors = {};
  let isValid = true;

  if(details.Fname.trim().length == 0)
  {
      Fname.style.color = "red";
      errors.Fname = "❌ Please enter your Name";
      isValid = false;
  }
  else if(details.Fname.trim().length>20)
  {
      Fname.style.color = "red";
      errors.Fname = "❌ Please enter a valid Name";
      isValid = false;
  }
  else 
  {
      Fname.style.color = "green";
      errors.Fname = " ✔️ Looks Good Now";
      isValid = true;
  }
  if(details.contact.trim().length==0)
  {
      contact.style.color = "red";
      errors.contact = "❌ Please enter your Contact number";
      isValid = false;
  }
  else if(details.contact.trim().length!=10 )
  {
      contact.style.color = "red";
      errors.contact = "❌ Please enter a valid Contact number";
      isValid = true;
  }
  else
  {
      contact.style.color = "green";
      errors.contact = " ✔️ Looks Good Now";
      isValid = true;
  }

  if(details.email.trim().length == 0)
  {
      email.style.color = "red";
      errors.email = "❌ Please enter your Email";
      isValid = false;
  }
  else if(!/\S+@\S+\.\S+/.test(details.email))
  {
      email.style.color = "red";
      errors.email = "❌ Please enter a valid Email Address";
      isValid = false;
  }
  else 
  {
      email.style.color = "green";
      errors.email = " ✔️ Looks Good Now";
      isValid = true;
  }

  if(details.message.trim().length == 0)
  {
      message.style.color = "red";
      errors.message = "❌ Please enter your Message";
      isValid = false;
  }
  else 
  {
      message.style.color = "green";
      errors.message = " ✔️ Looks Good Now";
      isValid = true;
  }


  setErrors(errors);
  return isValid;
}


  return (
    <>
      <section className="services">
        <div className="mt-5">
          <h1 className="text-center">Contact Us</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto  my-5" >
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                  <form onSubmit={formSubmit}  className="mb-5" noValidate>
                  <div class="mb-3">
                      <label for="exampleInput1" class="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        autoComplete="off"
                        class="form-control"
                        id="exampleInput1"
                        name="Fname"
                        value={details.Fname}
                        onChange={InputEvent}
                        
                      />
                      <span><div id="Fname">{errors.Fname}</div></span>
                    </div>                  
                    <div class="mb-3">
                      <label for="exampleInput2" class="form-label">
                        Contact number
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInput2"
                        name="contact"
                        value={details.contact}
                        onChange={InputEvent}
                        autoComplete={'' + Math.random()}
                      />
                      <span><div id="contact">{errors.contact}</div></span>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={details.email}
                        onChange={InputEvent}
                        autoComplete="random-email"
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                      <span><div id="email">{errors.email}</div></span>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputTextBox1" class="form-label">
                        Message
                      </label>
                      <textarea
                        type="text"
                        class="form-control"
                        id="exampleInputTextBox1"
                        name="message"
                        value={details.message}
                        onChange={InputEvent}
                        autoComplete="random"
                      />
                      <span><div id="message">{errors.message}</div></span>
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        I Agree to all the <a href="#">Terms and Conditions</a> listed here.
                      </label>
                    </div>
                    <span><div id="Check"></div></span>
                    <button type="submit" class="btn btn-custom d-flex m-auto text-center justify-content-center" style={{width:"10rem"}}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
