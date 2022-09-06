import React, { useEffect, useState } from "react";
import ResultsContainer from "./components/hits/ResultsContainer.jsx";

import loaderImage from "./img/loader.gif";

const App = ({ query, searchInstance }) => {
  // Create preloader state
  const [isLoading, setLoading] = useState(true);

  // Create a state variable that stores the search result.
  const [result, setResult] = useState({
    hits: [],
    nbHits: 0,
    nbPages: 0,
    page: 0,
    query: "",
  });

  // Fetch the Algolia response based on written search term.
  const search = async (
    searchTerm,
    page,
    searchableAttributes,
    facetFilters
  ) => {
    // If search term is not empty then get the results.
    if (searchTerm.localeCompare("") !== 0) {
      if (searchTerm.includes("label_")) {
        let tag = searchTerm.split("_");
        tag.shift();
        let facetFilters = `_tags:${tag.join(" ")}`;

        let response = await searchInstance.search("", { facetFilters: [facetFilters] });
        console.log(response);
        setResult(response);
      } else {
        let response = await searchInstance.search(searchTerm, {
          hitsPerPage: 10,
          page: page,
          restrictSearchableAttributes: searchableAttributes,
          facetFilters: [facetFilters],
        });

        console.log(response);
        setResult(response);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    search(query, 0);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <img src={loaderImage} />
        </div>
      ) : (
        <>
          <ResultsContainer result={result} navigateToPage={search} />
        </>
      )}
    </>
  );
};

export default App;
