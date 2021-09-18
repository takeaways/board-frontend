import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useRouter } from "next/router";
import { useState } from "react";

const Menus = ["home", "about"];

function Gnb() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/about");
    }
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        {Menus.map((menu) => (
          <Tab key={menu} label={menu} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default Gnb;
