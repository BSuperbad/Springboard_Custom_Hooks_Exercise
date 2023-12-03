import { useState} from "react";

const useFlip = (initialState = true) => {
const [flipState, setFlipState] = useState(initialState);
const toggleFlipState = () => {
    setFlipState(flipState => !flipState);
};
return [flipState, toggleFlipState]
};

export default useFlip;