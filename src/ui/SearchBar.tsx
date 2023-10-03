import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

type Props = {
  placeholder: string;
  value: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  containerClass?: string;
  inputClass?: string;
};

const SearchBar: React.FC<Props> = ({
  placeholder,
  value,
  onSearch,
  onIconClick,
  containerClass,
  inputClass,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);
  const [counter, setCounter] = useState(0);
  const [operation, setOperation] = useState<"write" | "delete" | null>(null);

  const editPlaceholder = (value: -1 | 1) => {
    setCounter((prevCounter) => prevCounter + value);
    if (operation === "delete") {
      setInputPlaceholder((prevPlaceholder) =>
        prevPlaceholder.substr(0, prevPlaceholder.length - value)
      );
    } else if (operation === "write") {
      setInputPlaceholder(
        (prevPlaceholder) =>
          prevPlaceholder + placeholder.substr(prevPlaceholder.length, 1)
      );
    }
  };

  const focusHandler = () => {
    setIsActive(true);
    setOperation("delete");
  };

  const blurHandler = () => {
    setIsActive(false);
    setOperation("write");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (operation === "delete" && counter < placeholder.length) {
        editPlaceholder(1);
      } else if (operation === "write" && counter > 0) {
        editPlaceholder(-1);
      }
    }, 60);

    return () => {
      clearTimeout(timer);
    };
  }, [counter, editPlaceholder, operation, placeholder.length]);

  let containerClasses = "search-bar-container";
  containerClasses += isActive ? " active" : "";
  containerClasses += containerClass ? " " + containerClass : "";

  const inputClasses = inputClass
    ? "search-bar" + " " + inputClass
    : "search-bar";

  return (
    <form className={containerClasses}>
      <input
        type="text"
        id="search"
        placeholder={inputPlaceholder}
        className={inputClasses}
        value={value}
        onChange={(e) => onSearch(e)}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
      <div className="icon-container" onClick={onIconClick || (() => {})}>
        <FaSearch className="icon" />
      </div>
    </form>
  );
};
export default SearchBar;
