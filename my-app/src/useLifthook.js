import {useEffect} from 'react'

const  useLifthook=(count)=> {
 useEffect(()=>{
   if(count>=1){
    document.title=`(${count}) chats`;

   }
   else {
     document.title=` chats`
   }
  
},[count])

}
export default useLiftshook;