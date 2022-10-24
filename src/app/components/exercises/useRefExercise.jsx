import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const inputRef = useRef("Блок");
    // or with useState:
    // const [text, setTextState] = useState("Блок");
    /*
    const toggleTextState = () => {
    setTextState((prevState) => (prevState === "Блок" ? "text" : "Блок"));
    };
*/
    const handleClickWidth = () => {
        if (inputRef.current.children[0].innerText === "Блок") {
            inputRef.current.children[0].innerText = "text";
            inputRef.current.style.width = "150px";
            inputRef.current.style.height = "80px";
        } else {
            inputRef.current.children[0].innerText = "Блок";
            inputRef.current.style.width = "60px";
            inputRef.current.style.height = "40px";
        }
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={inputRef}
            >
                <small>{inputRef.current}</small>
            </div>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Изменить ширину объекта
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
