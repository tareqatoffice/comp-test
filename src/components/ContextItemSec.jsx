import { useContext } from "react";
import { AppContext } from "react-ant-comp-test";

const ContextItemSec = () => {
    const { setMoodToday } = useContext(AppContext);
    return (
        <button onClick={() => { setMoodToday('Good') }}>
            Change Context Value
        </button>
    );
};

export default ContextItemSec;