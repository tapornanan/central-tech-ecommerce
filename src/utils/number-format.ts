const numberFormat = (number: number) =>
  new Intl.NumberFormat(`th-TH`, { style: `currency`, currency: `THB` }).format(
    number,
  );

export { numberFormat };
