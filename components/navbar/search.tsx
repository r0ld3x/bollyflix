import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmptyQuery, setIsEmptyQuery] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    } else {
      setIsEmptyQuery(true);
      setTimeout(() => {
        setIsEmptyQuery(false);
      }, 5000);
    }
  };

  useEffect(() => {
    if (!isEmptyQuery) {
      setSearchQuery("");
    }
  }, [isEmptyQuery]);

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex">
      {isEmptyQuery ? (
        <p className="text-rose-400 text-center self-center text-sm md:text-md lg:text-lg">
          Query is empty
        </p>
      ) : (
        <Input
          type="text"
          placeholder="Search"
          className="border-spacing-1 border-2 border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      )}
      <Button
        variant="ghost"
        className="dark:text-white text-white"
        onClick={handleSearch}
      >
        {" "}
        Search{" "}
      </Button>
    </div>
  );
};

export default Search;
