import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./Firebase"

export function signUp(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

export function logout1(){
    return signOut(auth)
}

export const logout =async()=>{
    await logout1()
    document.cookie =   "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}

