import React, { FC, useEffect, useState } from "react";

import { HighlightedText } from "./HighlightedText";
import { RepositoryFavorites, isFirstStrContainSecondSrt } from "./tools";

type Option = {
  id: string;
  text: string;
};

const App: FC<{ options: Option[] }> = ({ options }) => {
  const [favoritesIDs, setFavoritesIDs] = useState(RepositoryFavorites.get);
  const [search, setSearch] = useState("");

  useEffect(() => RepositoryFavorites.set(favoritesIDs), [favoritesIDs.length]);

  // o(n) on all options filtration
  const { popularOptions, favoriteOptions } = options.reduce(
    (acc, option) =>
      isFirstStrContainSecondSrt(option.text, search)
        ? favoritesIDs.includes(option.id)
          ? {
              ...acc,
              favoriteOptions: [...acc.favoriteOptions, option],
            }
          : {
              ...acc,
              popularOptions: [...acc.popularOptions, option],
            }
        : acc,
    { popularOptions: [], favoriteOptions: [] } as {
      popularOptions: Option[];
      favoriteOptions: Option[];
    }
  );

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {!popularOptions.length && !favoriteOptions.length && (
          <h2>Not Found</h2>
        )}
        {!!favoriteOptions.length && <h2>Favorites</h2>}
        {favoriteOptions.map(({ id, text }) => (
          <li key={id}>
            <button
              onClick={() =>
                setFavoritesIDs(
                  favoritesIDs.filter((favoritesID) => favoritesID !== id)
                )
              }
            >
              Remove
            </button>
            {search ? <HighlightedText text={text} target={search} /> : text}
          </li>
        ))}
        {!!popularOptions.length && <h2>Popular</h2>}
        {popularOptions.map(({ id, text }) => (
          <li key={id}>
            <button onClick={() => setFavoritesIDs([id, ...favoritesIDs])}>
              Like
            </button>
            {search ? <HighlightedText text={text} target={search} /> : text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { App };
