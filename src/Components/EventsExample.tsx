import React, { FC } from "react";

const EventsExample: FC = () => {

    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

    }

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);

    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler} type="text" placeholder="управляемый" />
            <input ref={inputRef} type="text" placeholder="неуправляемый" />
            <button onClick={onClickHandler}>
                Кнопка
            </button>
        </div>
    )
}

export default EventsExample;