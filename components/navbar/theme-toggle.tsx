"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  const [getHandle, setHandle] = useState(false);
  useEffect(() => {
    setHandle(true);
  }, []);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="flex justify-center items-center">
      {getHandle && theme === "dark" ? (
        <Sun
          onClick={handleTheme}
          className="text-white cursor-pointer items-center"
        />
      ) : (
        <Moon
          onClick={handleTheme}
          className={
            theme === "system"
              ? "text-black cursor-pointer items-center"
              : "text-white cursor-pointer items-center"
          }
        />
      )}
      {/* <Button onClick={handleTheme} className="bg-transparent hover:bg-transparent">
                {getHandle && theme === "dark" ? <Sun className="text-white" /> : <Moon className={theme === "system"? 'text-white': 'text-black'} />}
            </Button> */}
    </div>
  );
}
