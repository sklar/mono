import { forwardRef, HTMLAttributes } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	/**
	 * Label
	 */
	text: string
	/**
	 * Type
	 */
	type?: 'button' | 'reset' | 'submit'

	/**
	 * Size
	 */
	size?: 'sm' | 'md' | 'lg'
	/**
	 * Variant
	 */
	variant?: 'primary' | 'secondary'

	/**
	 * State: Active
	 */
	active?: boolean
	/**
	 * State: Busy
	 */
	busy?: boolean
	/**
	 * State: Disabled
	 */
	disabled?: boolean
}

// let's check if the `ci` pick-up this change and kicks in 🤔
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ active, busy, disabled, size = 'md', text, type = 'button', variant = 'secondary', ...props },
		ref,
	) => (
		<button
			ref={ref}
			data-active={active ?? null}
			data-busy={busy ?? null}
			data-size={size}
			data-type={type}
			data-variant={variant}
			disabled={busy || disabled ? true : undefined}
			{...props}
		>
			{text}
		</button>
	),
)

Button.displayName = 'Button'
