import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SearchItem {
  title: string;
  link: string;
  content: string;
}

const searchItems: SearchItem[] = [];

for (let i = 0; i < 10; i++) {
  searchItems.push({
    title: `Lorem, ipsum dolor. ${i + 1}`,
    link: "https://example.com",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis itaque, assumenda animi laudantium ad.",
  });
}

function App() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="flex flex-col place-items-center gap-4">
      <motion.div
        layout
        animate={{ flexDirection: query === "" ? "column" : "row" }}
        className={`w-full p-10 flex justify-center gap-10 bg-white ${
          query !== "" ? "" : "h-screen place-items-center"
        }`}
      >
        <motion.input
          type="text"
          className={`font-inter w-full h-screen text-9xl border-none outline-none  ${
            query !== ""
              ? "ring ring-blue-500 focus:ring-[5px] font-semibold rounded-2xl text-left"
              : "font-bold text-center"
          }`}
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.currentTarget.value)}
          animate={{
            height: query === "" ? "100vh" : "72px",
            width: query === "" ? "100vw" : "796px",
            fontSize: query === "" ? "8rem" : "32px",
            paddingLeft: query === "" ? "0" : "20px",
          }}
          layout
        />
        <motion.button
          layout
          className="bg-blue-500 text-white font-inter font-bold text-[32px] w-[341px] h-[72px] rounded-2xl block"
        >
          Filter
        </motion.button>
      </motion.div>

      {query !== "" &&
        searchItems.map(searchItem => (
          <motion.div>
            <h1>{searchItem.title}</h1>
            <a href={searchItem.link}>{searchItem.link}</a>
            <p>{searchItem.content}</p>
          </motion.div>
        ))}
    </div>
  );
}

export default App;
