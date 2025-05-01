import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/IsAuth";
import { login } from "../../Services/Auth";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { setIsAuth } = useContext(authContext);
  let nav = useNavigate();

  let submit = async (data) => {
    console.log(data);
    try {
      let res = await login(data.email, data.password);
      let expires = new Date();
      expires.setDate(expires.getDate() + 2);
      expires.toUTCString();
      document.cookie = `Token=${res.user.accessToken}; expires=${expires}; path=/`;
      setIsAuth(true);
      toast.success("Login Successfully !");
      nav("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="col-md-10 m-auto col-lg-6 col-xl-5 order-2 order-lg-1">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(submit)}>
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                id="form3Example3c"
                className="form-control"
                placeholder="abc@mail.com"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
              <input
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                id="form3Example4c"
                className="form-control"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              id="form2Example3c"
            />
            <label className="form-check-label" htmlFor="form2Example3c">
              Remember me
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
