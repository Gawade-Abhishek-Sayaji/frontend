import React, { useState } from "react";
import loginImage from "../Assets/loginImage.png";
import dfhome from "../Assets/dfhome.png";
import welcome from "../Assets/welcome.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const user=localStorage.getItem("user");
  useEffect(()=>{
    if(user){
      navigate("/");
    }
  })

    const submitData=async()=>{
        let result=await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        result = await result.json()
        console.log(result)
        setEmail("")
        setPassword("")
        localStorage.setItem("user",JSON.stringify(result))
       if(result){
           navigate("/");
       }
    }

  return (
    <div style={{ width: "100%" }}>
      <img src={loginImage} alt="loginImage" style={{ width: "100%" }} />

      <div
        className="p-4"
        style={{
          position: "absolute",
          height: "950px",
          width: "780px",
          top: "104px",
          left: "46px",
          borderRadius: "15px",
          backgroundColor: "white",
          padding: "10px, 10px, 10px, 10px",
          margin: "10px, 10px, 10px, 10px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderBlockColor: "black",
        }}
      >
        <div className="m-4">
          <img
            src={dfhome}
            alt="dfhome"
            style={{
              width: "301px",
              height: "158px",
              top: "161px",
              left: "285px",
            }}
          />
          <img src={welcome} alt="welcome" />
        </div>
        <div className="m-4">
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control, m-4, text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
                style={{
                  width: "673px",
                  height: "85px",
                  top: "458px",
                  left: "95px",
                  padding: "0px, 0px, 1px, 0px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control,m-4, text-center"
                id="exampleInputPassword1"
                
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "673px",
                  height: "85px",
                  top: "458px",
                  left: "95px",
                  padding: "0px, 0px, 1px, 0px",
                }}
              />
            </div>
            <label  htmlFor="exampleCheck1" className="text-right, form-check-label">Forgot Password?</label>

            <div >
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitData}
              style={{
                width: "673px",
                height: "80px",
                top: "888px",
                left: "95px",
                borderRadius: "8px",
                backgroundColor: "#5C218B",
              }}
            >
              Log In
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
