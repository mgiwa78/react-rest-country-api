export const fetchdata = async (url = "https://restcountries.com/v2/all") => {
  try {
    const FecthcedCountryData = await (
      await fetch(url)
    ).json((response) => response);

    if (FecthcedCountryData.message) {
      const { message } = FecthcedCountryData;
      if (message === "Not Found") throw new Error(`Invalid Contry name`);
      else {
        throw new Error(`${message}`);
      }
    }

    const newCountriesAraay = FecthcedCountryData.map((rawCountryData) => {
      // try {
      //   console.log(
      //     !rawCountryData.currencies
      //       ? "none"
      //       : rawCountryData.currencies[0]
      //       ? rawCountryData.currencies[0]
      //       : rawCountryData.currencies
      //   );
      // } catch (error) {
      //   console.log("error herer", rawCountryData);
      // }
      return {
        id:
          rawCountryData.population === 0
            ? 1 * (Math.random() * 10000000000000)
            : rawCountryData.population,
        flag: rawCountryData.flags.png,
        name: rawCountryData.name,
        otherProps: {
          capital: rawCountryData.capital,
          population: rawCountryData.population,
          subregion: rawCountryData.subregion,
          languages: rawCountryData.languages,
          nativeName: rawCountryData.nativeName,
          borders: rawCountryData.borders,
          region: rawCountryData.region,
          topLevelDomain: rawCountryData.topLevelDomain,
          currencies: !rawCountryData.currencies
            ? "none"
            : rawCountryData.currencies[0]
            ? rawCountryData.currencies[0]
            : rawCountryData.currencies,
        },
      };
    });

    return newCountriesAraay;
  } catch (error) {
    throw error;
  }
};
