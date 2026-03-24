import { Input, RadioInput } from "../common";

interface IRegisterProps {
  goToDashboard: () => void;
}

export const Register = ({ goToDashboard }: IRegisterProps) => {
  return (
    <div className="justify-start flex flex-col w-10/12 h-auto">
      <form className=" flex flex-col gap-3">
        <div className="flex gap-2">
          <Input type="text" placeholder="Name" label="First Name" />
          <Input type="text" placeholder="Name" label="Last Name" />
        </div>
        <div className="flex gap-2">
          <Input type="text" placeholder="Username" label="Username" />
          <Input type="email" placeholder="example@yahoo.com" label="Email" />
        </div>
        <div className="flex gap-2">
          <RadioInput label="Gender" options={["male", "female", "other"]} />
        </div>
        <div className="flex gap-2">
          <Input type="password" placeholder="••••••••" label="Password" />
          <Input
            type="password"
            placeholder="••••••••"
            label="Confirm password"
          />
        </div>
        <button
          className="bg-background-start hover:bg-background-finish transition duration-200 w-auto h-auto p-2 rounded-3xl hover:cursor-pointer"
          onClick={goToDashboard}
        >
          Register
        </button>
      </form>
    </div>
  );
};
