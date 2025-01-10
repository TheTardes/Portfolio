interface Props {
  className?: string;
  role?: string;
  ariaLabel?: string;
}

export default function ArrowRight({ className, role, ariaLabel }: Props) {
  return (
    <svg
      role={role}
      aria-label={ariaLabel}
      width="25"
      height="15"
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        className="fill-black"
        d="M24.0607 8.56077L18.7461 13.8754C18.4532 14.1683 18.0693 14.3147 17.6854 14.3147C17.3015 14.3147 16.9176 14.1683 16.6247 13.8754C16.039 13.2896 16.039 12.3398 16.6247 11.754L19.3787 9.00013H2C1.17158 9.00013 0.5 8.32855 0.5 7.50013C0.5 6.67171 1.17158 6.00013 2 6.00013H19.3787L16.6247 3.24622C16.039 2.66043 16.039 1.71069 16.6247 1.12489C17.2106 0.539098 18.1602 0.539098 18.7461 1.12489L24.0607 6.43949C24.6464 7.02524 24.6464 7.97502 24.0607 8.56077Z"
      />
    </svg>
  );
}
