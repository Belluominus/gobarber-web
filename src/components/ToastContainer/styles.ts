import styled, { css } from 'styled-components';

interface ToastPosition {
  position: 'left' | 'right';
}

const toastPositionVariations = {
  right: css`
    right: 0;
  `,
  left: css`
    left: 0;
  `,
};
export const Container = styled.div<ToastPosition>`
  position: absolute;
  top: 0;
  padding: 30px;
  overflow: hidden;

  ${props => toastPositionVariations[props.position]}
`;
