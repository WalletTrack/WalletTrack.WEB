import { capitalizeString } from "../../../utils";

interface IRadioInputProps{
    label: string,
    options: string[],
}

export const RadioInput = ({label, options}:IRadioInputProps) => {
  return (
    <div className="block text-sm w-full">
      <span className="mb-2 block text-slate-400">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
      <div className="flex gap-2">
        {options.map((option) => {
        return (
            <label className="flex-1" key={option}>
                <input
                    type="radio"
                    name={label.toLocaleLowerCase()}
                    value={option.toLowerCase()}
                    className="peer hidden"
                    required
                />
                <div className="bg-slate-700 border border-white/30 h-10 rounded-2xl flex items-center justify-center text-md cursor-pointer peer-checked:bg-background-finish peer-checked:text-white">
                    {capitalizeString(option)}
                </div>
            </label>
        );
        })}
      </div>
    </div>
  );
};
