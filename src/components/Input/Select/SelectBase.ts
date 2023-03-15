/**
 *
 * config for react-select
 *
 */

import { CSSProperties } from 'react';

const heightStylesDefault = { height: '20px', minHeight: '20px' };

const stylesCustom = (heightStylesProps?: CSSProperties) => {
  const heightStyles = heightStylesProps || heightStylesDefault;

  return {
    control: (provided: any) => ({
      ...provided,
      ...heightStyles,
    }),

    valueContainer: (provided: any) => ({
      ...provided,
      ...heightStyles,
      padding: '0 6px',
    }),

    input: (provided: any) => ({
      ...provided,
      margin: '0px',
    }),

    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),

    indicatorsContainer: (provided: any) => ({
      ...provided,
      ...heightStyles,
    }),

    singleValue: (provided: any) => ({
      ...provided,
      minWidth: '100%',
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 20,
    }),
    menuList: (provided: any) => ({
      ...provided,

      '::-webkit-scrollbar': {
        width: '4px',
        height: '0px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
  };
};

export { stylesCustom };
