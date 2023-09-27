import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import {ButtonHTMLAttributes} from 'react'

const button = tv({
    base: [
        'rounded-xl h-12 w-full px-4 py-2 text-sm font-semibold text-slate-800 outline-none shadow-sm',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400 transition',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            ghost:
            'px-3 shadow-none hover:opacity-80 rounded-full',
            primary: 
            'bg-pink-400 text-white hover:bg-pink-500',
            outline:
            'border-2 border border-pink-400 bg-pink-200 hover:bg-pink-100',
        },
    },
    defaultVariants: {
        variant: 'primary',
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
    asChild?: boolean
}

export function Button({asChild, variant, className, ...props}: ButtonProps){
    const Component = asChild ? Slot : 'button'

    return <Component {...props} className={button({ variant, className})}/>
}