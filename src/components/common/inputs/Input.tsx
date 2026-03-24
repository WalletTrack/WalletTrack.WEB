interface IInputProps{
    label: string,
    type: string,
    placeholder: string
}

export const Input = ({label, type, placeholder}:IInputProps) =>{
    return (
        <label className="block text-sm">
            <span className="mb-2 block text-slate-400">{label}</span>
                <input
                required
                type={type}
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder={placeholder}
                autoComplete="off"
              />
        </label>
    )
}