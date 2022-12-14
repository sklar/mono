import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Label
	 */
	text: string

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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ active, busy, disabled, size = 'md', text, type = 'button', variant = 'secondary', ...props },
		ref,
	) => (
		<button
			ref={ref}
			type={type}
			data-active={active ?? null}
			data-busy={busy ?? null}
			data-size={size}
			data-variant={variant}
			disabled={busy || disabled ? true : undefined}
			{...props}
		>
			{text}
		</button>
	),
)

Button.displayName = 'Button'
