import styled from '@emotion/styled';
import {
  compose,
  border,
  BorderProps,
  space,
  SpaceProps,
  layout
} from 'styled-system';

export const Input = styled('input')<BorderProps & SpaceProps>`
  ${compose(
    space,
    border,
    layout
  )}
`;
