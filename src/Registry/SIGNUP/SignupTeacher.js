import emailjs from "emailjs-com";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast

// Website Used: https://www.emailjs.com/

const SignupTeacher = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_qpkjyfh",
      "template_e0piyuo",
      e.target,
      "jKw7GysZ0WfXqo7rE"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
  const notify = () => toast("Your details sent successfully to ADMIN. Please wait for the response...");

  // Contact and Map
  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center">
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <div className='container'>
            <div className='m-50'>
              <div className="contact">
                <div className='text-center py-2 mt-3'>
                  <h2>Fill your <span className='text-primary'>Details</span></h2>
                  <hr className="w-50 m-auto" />
                </div>
                <div className="p-1">
                  <div
                    className="container border card"
                    style={{
                      backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <form
                      className="row p-5"
                      onSubmit={sendEmail}
                    >
                      <br />
                      <label><h5>Name</h5></label>
                      <input type="text" name="name" className="form-control" placeholder="Enter your name..." />

                      <div style={{ marginTop: "20px" }}></div>
                      <label><h5>Email</h5></label>
                      <input type="email" name="user_email" className="form-control" placeholder="Enter your email..." />

                      <div style={{ marginTop: "20px" }}></div>
                      <label><h5>Your CV Link</h5></label>
                      <input type="text" name="cv" className="form-control" placeholder="Provide your CV link..." />

                      <div style={{ marginTop: "20px" }}></div>
                      <label><h5>Experience</h5></label>
                      <input type="text" name="experience" className="form-control" placeholder="Previous experience..." />

                      <div style={{ marginTop: "20px" }}></div>
                      <label><h5>Message</h5></label>
                      <textarea name="message" rows="3" className="form-control" placeholder="Enter you feedback..." />

                      <div style={{ marginTop: "20px" }}></div>
                      <input
                        type="submit"
                        value="Send"
                        className="form-control btn btn-primary"
                        style={{ marginTop: "30px" }}
                        onClick={notify}
                      />
                      <ToastContainer
                        position="top-center"
                        autoClose={10000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                    </form>
                  </div>
                  <div className="mb-2 text-center">
                    Already have any account ? <Link to="/login-teacher"><strong>Log In</strong></Link>
                  </div>

                  <Link to="/home">
                    <div className=" mb-3 d-flex text-align-center justify-content-center">
                      <button type="submit">
                        Back to Home
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupTeacher