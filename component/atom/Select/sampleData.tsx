import React from 'react';
import { IOption } from './Select';

export const prices: IOption[] = [
  {
    label: 'Any price',
    value: '-1',
  },
  {
    label: 'Below 50',
    value: '0',
  },
  {
    label: '50 - 100',
    value: '50',
  },
  {
    label: '100 - 200',
    value: '100',
  },
  {
    label: '200 - 300',
    value: '200',
  },
  {
    label: '300 - 400',
    value: '300',
  },
  {
    label: '400 - 500',
    value: '400',
  },
  {
    label: '500 - 600',
    value: '500',
  },
];

export const dates: IOption[] = [
  {
    label: 'Okt 25 - Okt 31',
    value: 'okt25',
  },
  {
    label: 'Nov 1 - Nov 7',
    value: 'nov1',
  },
  {
    label: 'Nov 8 - Nov 14',
    value: 'nov8',
  },
  {
    label: 'Nov 15 - Nov 21',
    value: 'nov15',
  },
  {
    label: 'Nov 22 - Nov 28',
    value: 'nov22',
  },
  {
    label: 'Nov 29 - Dec 4',
    value: 'nov29',
  },
  {
    label: 'Dec 5 - Dec 11',
    value: 'dec5',
  },
];

export type CountryISO = 'BE' | 'DE' | 'FR' | 'IT' | 'NL' | 'RU' | 'US';
type rentalImg = 'rental0' | 'rental1' | 'rental2';

type image = 'logo' | 'demoAvatar' | CountryISO | rentalImg;

// Development images
// const devImages: Record<image, string> = {
//   logo: require("./logo.png"),
//   demoAvatar: require("./demoAvatar.png"),

//   BE: require("./be.svg"),
//   DE: require("./de.svg"),
//   FR: require("./fr.svg"),
//   IT: require("./it.svg"),
//   NL: require("./nl.svg"),
//   RU: require("./ru.svg"),
//   US: require("./us.svg"),

//   rental0: require("./rental0.png"),
//   rental1: require("./rental1.png"),
//   rental2: require("./rental2.png"),
// };

// Production images (CDN)
const prodImages: Record<image, string> = {
  logo: 'https://res.cloudinary.com/tailwindcss/image/upload/v1634916081/Logo_Icon_dq276z.png',
  demoAvatar:
    'https://res.cloudinary.com/tailwindcss/image/upload/v1634915122/demoAvatar_jooj6y.png',

  BE: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279280/be_jrkj6d.svg',
  DE: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279281/de_umqzrw.svg',
  FR: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279284/fr_kfnvdu.svg',
  IT: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279276/it_dwah46.svg',
  NL: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg',
  RU: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279278/ru_dcbkqy.svg',
  US: 'https://res.cloudinary.com/tailwindcss/image/upload/v1635279279/us_bid855.svg',

  rental0:
    'https://res.cloudinary.com/tailwindcss/image/upload/v1634674297/image_1_egxeww.png',
  rental1:
    'https://res.cloudinary.com/tailwindcss/image/upload/v1634674298/image_2_ngqift.png',
  rental2:
    'https://res.cloudinary.com/tailwindcss/image/upload/v1634674297/image_3_c7xiit.png',
};

export const images = prodImages;
// export const images = process.env.NODE_ENV === "production" ? prodImages : devImages;

interface ICountry {
  city: string;
  countryISO: CountryISO;
}

const countriesData: ICountry[] = [
  {
    city: 'Amsterdam',
    countryISO: 'NL',
  },
  {
    city: 'Rome',
    countryISO: 'IT',
  },
  {
    city: 'Berlin',
    countryISO: 'DE',
  },
  {
    city: 'Paris',
    countryISO: 'FR',
  },
  {
    city: 'Washington',
    countryISO: 'US',
  },
  {
    city: 'Moscow',
    countryISO: 'RU',
  },
  {
    city: 'Brussels',
    countryISO: 'BE',
  },
];

export const countries: IOption[] = countriesData.map(country => ({
  value: country.countryISO,
  label: (
    <>
      <img
        src={images[country.countryISO]}
        alt={country.countryISO.toLowerCase()}
        style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem' }}
      />{' '}
      {`${country.city}, ${country.countryISO}`}
    </>
  ),
}));
