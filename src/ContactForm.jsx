import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js"
import Footer from './Footer'

const formElements = [
  {
    label: "Full Name",
    key: "name",
  },
  {
    label: "Contact number",
    key: "contact",
  },
  {
    label: "Email",
    key: "email",
    message: "We'll never share your email with anyone else.",
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  let error;

  const handleChange = (value, key) => {
    setFormData((oldData) => {
      return { ...oldData, [key]: value };
    });

    formElements.forEach((formElement) => {
      if ((formData[formElement.key] != undefined)&&(!formData['name'].length<=2)) {
        error = document.getElementById("alert-danger");
        error.style.display = "none";
      }
      else {
        error = document.getElementById("alert-success");
        error.style.display = "block";
        error.innerText = "Everything is Looking Good!";
        setTimeout(() => {
          error.style.display = "none";
        }, 8000);
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid()) {
      return;
    } else {
      alert(
        `Thankyou ,${formData[formElements[0].key]} .Your contact:${
          formData[formElements[1].key]
        } and email:${
          formData[formElements[2].key]
        } are saved in our database and we assure you that we will never share it and it will never be misused.`
      );
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      Array.from(document.querySelectorAll("textarea")).forEach(
        (textarea) => (textarea.value = "")
      );

      error = document.getElementById("alert-success");
      error.style.display = "block";
      error.innerText = "Details Submitted Successfully!";
      setTimeout(() => {
        error.style.display = "none";
      }, 8000);
    }
  };

  const isFormInvalid = () => {
    let returnValue = false;

    formElements.forEach((formElement) => {
      console.log(formData['name']);

      if (formData[formElement.key] == undefined) 
      {
        error = document.getElementById("alert-danger");
        error.style.display = "block";
        error.innerText = formElement.label + " is Missing!";
        setTimeout(() => {
          error.style.display = "none";
        }, 5000);
        returnValue = true;
      }
     else if((formData['name'].length<=2))
      {
        error = document.getElementById("alert-danger");
        error.style.display = "block";
        error.innerText = "Invalid Name";
        setTimeout(() => {
          error.style.display = "none";
        }, 5000);
        returnValue = true;
      }
      else if((formData['contact'].length!=10))
      {
        error = document.getElementById("alert-danger");
        error.style.display = "block";
        error.innerText = "Invalid Contact number";
        setTimeout(() => {
          error.style.display = "none";
        }, 5000);
        returnValue = true;
      }
      else {
        error = document.getElementById("alert-danger");
        error.style.display = "none";
      }
    });
    return returnValue;
  };




  return (
    <>
      <section className="services">
        <div className="mt-5">
          <h1 className="text-center">Contact Us</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto  my-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                  <div
                    className="alert alert-danger"
                    id="alert-danger"
                    style={{ display: "none" }}
                    role="alert"
                  ></div>
                  <div
                    className="alert alert-success"
                    id="alert-success"
                    style={{ display: "none" }}
                    role="alert"
                  ></div>

                  <form action="" onSubmit={handleFormSubmit}>
                    {formElements.map((formElement) => {
                      return (
                        <>
                          <div className="m-3">
                            <strong>
                              <label
                                htmlFor={formElement.key}
                                className="form-label"
                              >
                                {formElement.label}<span style={{color:"red"}}>*</span>
                              </label>
                            </strong>
                            <br />
                            <input
                              value={formData[formElement.key]}
                              onChange={(e) => {
                                handleChange(e.target.value, formElement.key);
                              }}
                              id={formElement.key}
                              className="form-control"
                              autoComplete="false"
                            />
                            <span id="nameError"></span>
                            <span id="EmailError"></span>
                            <span id="numberError"></span>
                            <p>{formElement.message}</p>
                          </div>
                        </>
                      );
                    })}
                    <div className="m-3">
                    <strong><label htmlFor="exampleInputTextBox1">Message</label></strong>
                    <textarea
                        type="text"
                        class="form-control"
                        id="exampleInputTextBox1"
                        name="message"
                        autoComplete="random"
                      />
                      </div>
                    <button
                      type="submit"
                      className="btn btn-custom d-flex m-auto text-center justify-content-center mb-5"
                      style={{ width: "10rem" }}
                    >
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

export default ContactForm;
