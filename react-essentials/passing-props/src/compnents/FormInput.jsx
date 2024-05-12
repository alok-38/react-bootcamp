export default function FormInput({
  labelText,
  inputId,
  inputType,
  placeholder,
  inputDescription,
}) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      <div className="mt-2">
        <input
          id={inputId}
          name={inputId}
          type={inputType}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{inputDescription}</p>
    </div>
  );
}
