import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useState } from "react";

const Menus = ["home", "messages", "friends"];

function Gnb() {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {Menus.map((menu, i) => (
          <Tab key={menu} label={menu} value={i} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default Gnb;
