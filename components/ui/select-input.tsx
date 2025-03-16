import { FC } from "react";

interface SelectInputProps {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectedOptions: string[]; //
  setSelectedOption: (newValue: string[]) => void;
  allowMultiple?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  type,
  id,
  text,
  selectedOptions,
  setSelectedOption,
  allowMultiple,
}) => {
  const handleOptionChange = (id: string) => {
    // If allowMultiple is true, toggle the option
    if (allowMultiple) {
      if (selectedOptions.includes(id)) {
        // Remove the option if it exists
        setSelectedOption(selectedOptions.filter((option) => option !== id));
      } else {
        // Add the option if it does not exist
        setSelectedOption([...selectedOptions, id]);
      }
    } else {
      // If it's a radio button, ensure only one option is selected
      setSelectedOption([id]);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
