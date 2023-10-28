import { useContext } from "react";
import { AppContext } from "react-ant-comp-test";

const ContextItem = () => {
    const { moodToday, } = useContext(AppContext);
    return (
        <>
            A context value - {moodToday}
        </>
    );
};

export default ContextItem;