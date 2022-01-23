import { useState } from "react";
import Header from './header';

export default {
    title : 'Components/Header',
    component: Header
}


export const LayoutHeader = () => {
    const [selected, setSelected] = useState("characters");

    return (
        <Header
          buttons={["characters", "location", "episodes"]}
          selected={selected}
          setSelected={setSelected}
        />
    )
}