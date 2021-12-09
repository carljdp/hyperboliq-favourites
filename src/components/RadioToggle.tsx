import React, {FC} from "react";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

interface iKeyValue {
    key: string,
    value: string,
    icon?: FC
}

interface iRadioToggle {
    name: string,
    options: iKeyValue[],
    currentState: string,
    setState:  React.Dispatch<React.SetStateAction<string>>,
}

const RadioToggle: FC<iRadioToggle> = (props: iRadioToggle) => {
    return (

        <ButtonGroup >
            {props.options.map((option: iKeyValue, idx: number) => (
                <ToggleButton
                    type="radio"
                    key={idx}
                    id={option.key}
                    value={option.key}
                    variant={"outline-light"}
                    name={option.key}
                    checked={props.currentState === option.key}
                    onChange={(e) => props.setState(e.currentTarget.value)}
                    className="pt-1 pb-2 "
                >
                    {option.icon ? option.icon : option.value}
                </ToggleButton>
            ))}
        </ButtonGroup>

    );
};

export default RadioToggle;


