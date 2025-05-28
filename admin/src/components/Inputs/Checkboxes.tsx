import type { FC } from "react";

export interface CheckboxesProps {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkboxes: FC<CheckboxesProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-black gap-2">
      <label className="flex justify-center items-center p-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        {label}
      </label>
    </div>
  );
};
