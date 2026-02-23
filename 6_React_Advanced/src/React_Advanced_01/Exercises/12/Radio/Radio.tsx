import * as React from "react";
import "./styles.css";

interface RadioGroupProps {
    onChange: (value: string) => void;
    selected: string;
    children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ onChange, selected, children }) => {
    const RadioOptions = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return null;
        }
        return React.cloneElement(child as React.ReactElement<any>, {
            onChange,
            checked: child.props.value === selected,
        });
    });
    return <div className="RadioGroup">{RadioOptions}</div>;
};

interface RadioOptionProps {
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    children: React.ReactNode;
}

export const RadioOption: React.FC<RadioOptionProps> = ({ value, checked, onChange, children }) => {
    return (
        <div className="RadioOption">
            <input
                id={value}
                type="radio"
                name="radio-group"
                value={value}
                checked={checked}
                onChange={(e) => {
                    if (onChange) {
                        onChange(e.target.value);
                    }
                }}
            />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};
