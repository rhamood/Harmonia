import { useState } from "react";
//import { data } from "react-router-dom";

interface FormData{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
  
  const initialForm: FormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //updates data with new input value
  const [data, setData] = useState<FormData>(initialForm); // add this line

  //show message for Register
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({...data, [id]: value});
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.name == "" || data.email == "" || data.password == ""){
      setMessage("Please fill the form");
      return;
    }
    //if email Id already exists

    //Save the user in local storage

  }

  return  (
    <form onSubmit={handleFormSubmit}>
        <h1 className='text-6xl font-bold text-white'>Register Here</h1>
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Name" 
          id="name" 
          value={data.name} 
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input 
          type="text" 
          placeholder="Email" 
          id="email" 
          value={data.email} 
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input 
          type="text" 
          placeholder="Password" 
          id="password" 
          value={data.password} 
          onChange={handleInputChange}
        />

        <button>Register</button>
        <div className="social">
          <h2>Login</h2>
        </div>
    </form>
  );

};


export default RegisterPage;


