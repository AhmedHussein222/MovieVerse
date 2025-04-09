import { useForm } from "react-hook-form"
import { login } from "../../Services/Auth";
import { useContext } from "react";
import { authContext } from "../../Context/IsAuth";
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from "react-router-dom";
function Login  ()  {
       

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const {setIsAuth} = useContext(authContext)
  let nav = useNavigate()

  let submit=async(data)=>{
    console.log(data);
    try {
        let res = await login(data.email,data.password)
        let expires = new Date()
        expires.setDate(expires.getDate()+2)
        expires.toUTCString()
        // document.cookie = `Token=${res.user.accessToken}; expires=${expires}; path=/`;
        document.cookie = `Token=${res.user.accessToken}; expires=${expires}; path=/`;
        setIsAuth(true)
        toast.success('Login Successfully !');
        nav('/')

    } catch (error) {
        console.error(error.message);
        
    }    
  }
 
  



    return ( 
    
        <>
        <div className="m-5 col-6 m-auto  p-5 bg-secondary">
            <form action=""  onSubmit={handleSubmit(submit)} >

                <label htmlFor="" className="form-label">Email</label>
            <input
                type="text"
                className="form-control"
                name="email"
                {...register("email",{required:"Email is required"})}
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
            />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}

                
            <label htmlFor="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                {...register("password",{required:"password is required"})}
                aria-describedby="emailHelpId"
                placeholder="Password"
            />
             {errors.password && <p className="text-danger">{errors.password.message}</p>}


            <button className="btn btn-info col-4 my-5 text-center mx-auto">Login</button>
            </form>
            
            
        </div>
        
        </> 
    
    );
}

export default Login;