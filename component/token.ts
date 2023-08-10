/*= ============================================
=                  Colors                     =
============================================= */

export interface Token {
  [key: string]: string;
}

export const COLOR: Token = {
  gray0: '#f7f9fc',
  gray1: '#fff',
  gray2: '#fafaf9',
  gray3: '#f3f2f2',
  gray4: '#ecebea',
  gray5: '#dddbda',
  gray6: '#c9c7c5',
  gray7: '#b0adab',
  gray8: '#969492',
  gray9: '#706e6b',
  gray10: '#514f4d',
  gray300: '#a1a9b8',
  neutral10: '#181818',
  neutral20: '#2e2e2e',
  neutral30: '#444444',
  neutral40: '#5c5c5c',
  neutral50: '#747474',
  neutral60: '#939393',
  neutral70: '#aeaeae',
  neutral80: '#c9c9c9',
  neutral90: '#e5e5e5',
  neutral95: '#f3f3f3',
  orange10: '#201600',
  orange15: '#371e03',
  orange30: '#852400',
  orange40: '#ad3000',
  orange50: '#d63b00',
  orange60: '#ff4600', //  brand
  orange70: '#ff672e',
  orange80: '#ffaa8a',
  orange90: '#ffcbb7',
  orange95: '#ffece5',
  red50: '#ea001e',
  red60: '#fb4637',
  blue: '#171C8F',
};

export const TEXTCOLOR: Token = {
  default: 'var(--color-neutral10)',
  brand: 'var(--color-orange60)',
  brandPrimary: 'var(--color-gray1)',
  import: 'var(--color-red60)',
  error: 'var(--color-red60)',
  label: 'var(--color-neutral30)',
  labelActive: 'var(--color-neutral10)',
  buttonDisabled: 'var(--color-neutral80)',
  iconDefault: 'var(--color-neutral50)',
  inputDisabled: 'var(--color-neutral30)',
  link: 'var(--color-orange60)',
  linkActive: 'var(--color-orange40)',
  linkDisabled: 'var(--color-orange40)',
  linkFocus: 'var(--color-orange40)',
  linkHover: 'var(--color-orange40)',
};

export const BACKGROUND: Token = {
  primary: 'var(--color-gray1)',
  brand: 'var(--color-orange60)',
  inputRadio: 'var(--color-gray1)',
  inputCheckBox: 'var(--color-blue)',
  inputCheckBoxReadOnly: 'var(--color-gray0)',
  inputCheckBoxDisabled: 'var(--color-neutral95)',
  inputDisabled: 'var(--color-gray0)',
  notificationNew: 'var(--color-neutral95)',
  rowHover: 'var(--color-neutral95)',
  rowSelected: 'var(--color-neutral95)',
  toast: 'var(--color-neutral50)',
  toggle: 'var(--color-neutral70)',
  toggleDisabled: 'var(--color-neutral70)',
  toggleHover: 'var(--color-neutral60)',
};

/* Font sizes */
export const FONT: Token = {
  size1: '1rem',
  size2: '1.2rem',
  size3: '1.3rem',
  size4: '1.4rem',
  size5: '1.6rem',
  size6: '1.8rem',
  size7: '2rem',
  size8: '2.4rem',
  size9: '2.8rem',
  size10: '3.2rem',
  regular: '400',
  bold: '700',
  semiBold: '600',
};

export const LINE_HEIGHTS: Token = {
  heading: '1.2',
  text: '1.1',
};

export const INPUT: Token = {
  small: '29rem',
  middle: '62rem',
  lage: '84rem',
  height: '4rem',
  fontsize: '1.4rem',
  fontweight: '400',
  border: 'var(--color-neutral90)',
  placeholder: 'var(--color-neutral50)',
  focusBorder: 'var(--color-neutral10)',
  focusPlaceholder: 'var(--color-neutral10)',
  disabledPlaceholder: 'var(--color-gray300)',
  checkBoxBorder: 'var(--color-neutral90)',
  checkBoxCheckedBorder: 'var(--color-blue)',
  checkBoxReadOnlyBorder: 'var(--color-neutral90)',
  checkBoxDisabeldBorder: 'var(--color-neutral90)',
};

export const LABEL: Token = {
  fontsize: '1.2rem',
};

export const TABS: Token = {
  fontweight: '700',
};
