const RepositoryFavorites = {
  storageName: "FAVORITES",
  get: (): string[] =>
    JSON.parse(localStorage.getItem(RepositoryFavorites.storageName) ?? "[]"),
  set: (list: string[]) =>
    localStorage.setItem(RepositoryFavorites.storageName, JSON.stringify(list)),
};

export { RepositoryFavorites };
