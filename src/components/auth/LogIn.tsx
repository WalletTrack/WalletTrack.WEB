import { Input } from "../common";

interface ILogInProps{
    goToDashboard: () => void;
}


export const LogIn = ({goToDashboard}:ILogInProps) =>{
    return(
        <div className="justify-start flex flex-col w-10/12 h-auto">
          <form className=" flex flex-col gap-3">
            <Input type="email" placeholder="Email" label="Email"/>
            <Input type="password" placeholder="Password" label="Password"/>
            <button className="bg-background-start hover:bg-background-finish transition duration-200 w-auto h-auto p-2 rounded-3xl hover:cursor-pointer"
            onClick={goToDashboard}>
                LogIn
            </button>
          </form>
        </div>
    )
}