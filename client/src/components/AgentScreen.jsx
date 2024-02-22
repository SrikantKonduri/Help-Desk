import { useContext, useEffect } from "react"
import { useNavigate, useNavigation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext.jsx"


export const AgentScreen = ()=>{
   const {authToken} = useContext(AuthContext)
   const navigate = useNavigate()
   useEffect(() => {
      if(authToken == null){
         navigate('/connect')
      }
      else{
         fetch(`https://graph.facebook.com/v13.0/me/conversations?access_token=${authToken}`)
         .then(response => response.json())
         .then(data => {
            console.log(data);
            // Process the data here
         })
         .catch(error => console.error('Error:', error));
      }
   }, [])
   
   return (
      <>
         <div>
            Agent Screen
         </div>
      </>
   )
}