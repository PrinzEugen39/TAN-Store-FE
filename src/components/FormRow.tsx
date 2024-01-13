type FormRowProps = {
  label?: string;
  error?: string;
  children: React.ReactNode;
};

function FormRow({ label, error, children }: FormRowProps) {
  const labelFor = label ? label.toLowerCase() : "";
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="mb-2 text-sm font-bold uppercase md:text-md text-grey-darkest"
          htmlFor={labelFor}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="mb-2 -mt-2 text-sm text-red-500">⚠ {error}</span>
      )}
    </div>
  );
}

export default FormRow;
