import { signUp } from "../../Services/Auth";
import { useForm } from "react-hook-form";
       


function SignUp() {
  
  
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  let submit= async (data)=>{
try {
  await signUp(data.email,data.password)
   

    }catch (error) {
      console.log(error.message);
      
    }
}
let confirmPassword = ()=>{
      
}

  

  


  return(
    <>
      <div className="col-md-10 m-auto col-lg-6 col-xl-5 order-2 order-lg-1">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          Sign up
        </p>

        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(submit)}>
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example1c">
                Your Name
              </label>
              <input
                type="text"
                id="form3Example1c"
                className="form-control"
                name="name"
                required


              />
              <div className="text-danger">{errors.nameError}</div>
            </div>
          </div>

          {/* Email */}
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                {...register("email",{required:"Email is required"})}

                id="form3Example3c"
                className="form-control"
              />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}

              <div className="text-danger">{errors.emailError}</div>
            </div>
          </div>



          {/* Password */}
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
              <input
              required
                name="_password"
                type="password"
                {...register("password",{required:"password is required"})}
                id="form3Example4c"
                className="form-control"
              />
             {errors.password && <p className="text-danger">{errors.password.message}</p>}

            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4cd">
                Repeat your password
              </label>
              <input
                name="repeatPassword"
                onChange={(e) => confirmPassword(e)}
                type="password"
                required
                id="form3Example4cd"
                className="form-control"
              />
              <div className="text-danger">{errors.repeatPasswordError}</div>

            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="form2Example3c"
            />
            <label className="form-check-label" htmlFor="form2Example3c">
              I agree to all statements in{" "}
              <a href="#!">Terms of service</a>
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button  id="register" className="btn btn-primary btn-lg" >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp;
