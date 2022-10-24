import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    console.log(children);

    return React.Children.map(children, (child, index) => {
        console.log(child);
        console.log(index);
        const config = {
            ...child.props,
            index: index
        };
        console.log(config);

        return (
            <>
                {index + 1}
                {React.cloneElement(child, config)}
            </>
        );
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component name="a" />
                <Component name="b" />
                <Component name="c" />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
