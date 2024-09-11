import user from "../schema/user-schema.js";

//API request
export const addUser= async(request, response)=>{
   const user= request.body;

  const validatedUser = new user(user);

  try{
   await validatedUser.save();
   response.status(201).json(validatedUser);
  } catch(error){
    response.status(400).json({message:error.message});
  }
}