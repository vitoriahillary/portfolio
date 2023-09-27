'use client'

import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    id: string
    onChange: any;
    value: string;
    label: string;
    type?: string;
}

const TextArea : React.FC<TextAreaProps> = ({
    id,
    onChange,
    value,
    label,
    type,
    ...props
}) =>{
    return(
        <div className="relative w-full">
            <textarea 
            id={id}
            onChange={onChange}
            value={value}
            className="
                block
                rounded-md
                px-6
                pt-6
                pb-1
                w-full
                text-md
                bg-violet-50
                border
                border-zinc-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
            "
            placeholder=" "
            {...props}
            />
            <label 
                className="
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    z-10
                    origin-[0]
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                "
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}

export default TextArea