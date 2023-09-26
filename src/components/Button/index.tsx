import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import {ButtonHTMLAttributes} from 'react'

const button = tv({
    base: [
        'rounded-xl h-12 w-full px-4 py-2 text-sm font-semibold text-black outline-none shadow-sm',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-700 transition',
        'active:opacity-80',
    ],
    variants: {
        variant: {
            ghost:
            'px-3 hover:bg-zinc-50 shadow-none hover:brightness-90 rounded-full',
            primary: 
            'bg-violet-800 text-white hover:bg-violet-700',
            outline:
            'border-2 border border-violet-500 hover:brightness-90 bg-violet-50',
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