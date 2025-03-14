import { useForm } from "react-hook-form"

function Login  ()  {
       

  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  let submit=(data)=>{
    console.log(data);
    
  }
 
  



    return ( 
    
        <>
        <div className="mb-3 col-12 m-auto  p-5 bg-secondary">
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
                type="text"
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