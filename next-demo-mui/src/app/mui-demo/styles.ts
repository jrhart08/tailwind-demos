'use client';

import styled from "@emotion/styled";

export const DemoPageHeader = styled.div({
  textAlign: 'center',
});

export const DemoPageBody = styled.div({
  textAlign: 'left',
  paddingTop: '2rem',
});

export const Quote = styled.h2`
  color: ${(props) => {
    console.log(props.theme);

    return props.theme.palette.secondary.main;
  }};
  font-style: italic;
  text-align: right;
`;

export const Credit = styled.h3`
  color: ${(props) => {
    console.log(props.theme);

    return props.theme.palette.secondary.main;
  }};
  font-style: italic;
  text-align: right;

  &::before {
    content: '- ';
  }
`;