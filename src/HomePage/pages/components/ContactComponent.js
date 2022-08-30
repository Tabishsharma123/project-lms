import emailjs from "emailjs-com";
import '../Home.css'
import { ToastContainer, toast } from 'react-toastify'; // Using Toast
import 'react-toastify/dist/ReactToastify.css';         // Using Toast

// Website Used: https://www.emailjs.com/

const ContactComponent = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_2g1nywj",
      "template_8fzdr4s",
      e.target,
      "jKw7GysZ0WfXqo7rE"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }


  // Using Toast: https://fkhadra.github.io/react-toastify/introduction/
  const notify = () => toast("Your Feedback sent successfully to ADMIN!");

  // Contact and Map
  return (
    <div className='container'>
      <div className='text-center py-3'>
        <h1>Contact <span className='text-primary'>Us</span></h1>
        <hr className="w-25 m-auto" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className='row'>
        {/* ------Contact-------- */}
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <div className="contact">
            <div className='text-center py-2 font-design'>
              <h2>Give your <span className='text-primary'>Feedback</span></h2>
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
                  <label><h5>Message</h5></label>
                  <textarea name="message" rows="4" className="form-control" placeholder="Enter you feedback..." />

                  <div style={{ marginTop: "20px" }}></div>
                  <input
                    type="submit"
                    value="Send"
                    className="form-control btn btn-primary"
                    style={{ marginTop: "30px" }}
                    onClick={notify}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ------Map-------- */}
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <div className="map">
            <div className='text-center py-2 font-design'>
              <h2>Our base <span className='text-primary'>Location</span></h2>
            </div>

            <div>
              <div className="address px-5 text-center">
                <p>
                  Address: Plot No.7, Oxygen Business Park SEZ, Tower, 3, Noida-Greater Noida Expy, Sector 144, Noida, Uttar Pradesh
                  <strong>
                    <div> Pin Code: 201304</div>
                    <div> Phone: 0120 434 2000</div>
                  </strong>
                </p>
                <div className='mt-4 mb-4 contact-card shadow'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-2 mt-3'></div>
    </div>
  );
};

export default ContactComponent