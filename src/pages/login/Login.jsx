import { useState , useContext} from "react"
import axios from "axios"
import "./login.scss"
import { UserContext } from "../../context/UserContext"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaTumblrSquare } from "react-icons/fa"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { url } from "../../formSource"

function Login () {
    const navigate = useNavigate()
    const { user , setUser } = useContext(UserContext);    
    const [signUpLoading , setSignUpLoading] = useState(false)
    const [signInLoading , setSignInLoading] = useState(false)
    const [signUpError , setSignUpError ] = useState(false)
    const [signInError , setSignInError ] = useState(false)
    
    const [ checker , setChecker ] = useState(true);

    function handleReg () {
        setChecker(!checker)    
    }

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),    
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')            
      });


      const SigninSchema = Yup.object().shape({
        username: Yup.string()
          .required('Required'),
        password: Yup.string().required('Password is required'),
      });      

    return (
        <>
        <div className="log">    
        <h1 className="sign-reg">  <span className="reg" onClick={ handleReg}> Login </span> </h1>
    

    {
        <Formik
          initialValues={{
            username: '',
            password: '',
        }}
          validationSchema={SigninSchema}
          onSubmit={values => {
                setSignInLoading(FaTumblrSquare)
            axios.post(`${url}/api/auth/login` ,  values , {
              withCredentials: true,
              headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}              
            } ).then((res)=>{
                setSignInLoading(false)
                setUser(res.data.username)                
                Swal.fire(
                    'Success!',
                    'Log In Successful!',
                    'success'
                  )                
                localStorage.setItem("username" ,  res.data.username)
                setTimeout(() => {
                  window.location = "https://guide-admin.vercel.app/"  
                }, 1000);
            }).catch ((err)=>{
                console.log(err)
                setSignInLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went Wrong? - Wrong Username or password',
                })                
            })
        }}
        >  
          {({ errors, touched }) => (
              <Form className="register">
              <label> Username </label> <br/>
              <Field name="username" placeholder="Username"/> 
              {errors.username && touched.username ? (
                <p className="error">{errors.username}</p>
              ) : null} <br />

              <label> Password </label> <br/>
              <Field name="password" type="password"  placeholder="Password"/>
              {errors.password && touched.password ? (
                <p className="error">{errors.password}</p>
              ) : null}
              <br/>
              <button type="submit" className="btn" disabled = { signInLoading ? true : false}>Submit</button>
            </Form>
          )}
        </Formik>
        }

      </div> 
      </>     
    )
}   


export default Login