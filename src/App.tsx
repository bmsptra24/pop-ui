import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./App.scss";
import { Button, Checkbox, IconButton, Input, RadioButton } from "./components";
import { useState } from "react";
// import { ThemeProvider } from "./lib/ThemeContext";

function App() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [isChecked, setisChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    // <ThemeProvider>
    <main>
      <section>
        <Button shape="square" size="sm">
          Button
        </Button>
        <Button shape="square" size="md">
          Button
        </Button>
        <Button shape="square" size="lg">
          Button
        </Button>
      </section>
      <section>
        <Button shape="rounded" size="sm">
          Button
        </Button>
        <Button shape="rounded" size="md">
          Button
        </Button>
        <Button shape="rounded" size="lg">
          Button
        </Button>
      </section>

      {/* Icon Button */}
      <section>
        <IconButton icon={<FaFacebook />} shape="rounded" size="sm" />
        <IconButton icon={<FaInstagram />} shape="rounded" size="md" />
        <IconButton icon={<FaWhatsapp />} shape="rounded" size="lg" />
      </section>
      <section>
        <IconButton icon={<FaFacebook />} shape="square" size="sm" />
        <IconButton icon={<FaInstagram />} shape="square" size="md" />
        <IconButton icon={<FaWhatsapp />} shape="square" size="lg" />
      </section>

      {/* Input */}
      <section>
        <Input placeholder="Type in here..." shape="square" size="sm" />
        <Input placeholder="Type in here..." shape="square" size="md" />
        <Input placeholder="Type in here..." shape="square" size="lg" />
      </section>
      <section>
        <Input placeholder="Type in here..." shape="rounded" size="sm" />
        <Input placeholder="Type in here..." shape="rounded" size="md" />
        <Input placeholder="Type in here..." shape="rounded" size="lg" />
      </section>

      <section>
        <RadioButton
          label="Option 1"
          name="custom-radio"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleChange}
        />
        <RadioButton
          label="Option 2"
          name="custom-radio"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleChange}
        />
        <RadioButton
          label="Option 3"
          name="custom-radio"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleChange}
        />
      </section>

      {/* Checkbox */}
      <section>
        <Checkbox
          checked={isChecked}
          label="Ayam"
          onChange={() => setisChecked((prev) => !prev)}
        />
      </section>
    </main>
    // </ThemeProvider>
  );
}

export default App;
