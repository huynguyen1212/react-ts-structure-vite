import React from 'react';
import S, { Props, components } from 'react-select';
import styled from 'styled-components';
import { stylesCustom } from './SelectBase';

export default function Select(props: Props) {
  return (
    <Styles>
      <S
        {...props}
        classNamePrefix="rs"
        styles={stylesCustom()}
        components={{ Option: Control, MultiValueLabel, SingleValue }}
      />
    </Styles>
  );
}

const Control = ({ ...props }: any) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div className="option">
        {data.icon && <span className="icon">{data.icon || ''}</span>}

        <span className="text">{data.label}</span>
      </div>
    </components.Option>
  );
};

const MultiValueLabel = ({ ...props }: any) => {
  const { data } = props;
  return (
    <components.MultiValueLabel {...props}>
      <div className="option">
        {data.icon && <span className="icon">{data.icon || ''}</span>}

        <span className="text">{data.label}</span>
      </div>
    </components.MultiValueLabel>
  );
};

const SingleValue = ({ ...props }: any) => {
  const { data } = props;
  return (
    <components.SingleValue {...props}>
      <div className="option">
        {data.icon && <span className="icon">{data.icon || ''}</span>}

        <span className="text">{data.label}</span>
      </div>
    </components.SingleValue>
  );
};

export const Styles = styled.div`
  .rs__control {
    border: unset;

    .rs__value-container {
      .rs__single-value {
        .option {
          display: flex;
          align-items: center;
          white-space: nowrap;
          cursor: pointer;

          .text {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }

  .rs__menu {
    border-radius: 4px;
    padding: 4px;

    &:hover {
      .rs__menu-list {
        .rs__option--is-focused {
          border-radius: 4px;
        }
      }
    }

    .rs__menu-list {
      .rs__option {
        width: 100%;
        border-radius: 4px;

        .option {
          display: flex;
          align-items: center;
          white-space: nowrap;
          cursor: pointer;
          .text {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }

      .rs__option--is-focused {
        border-radius: 4px;
      }
    }
  }
`;
