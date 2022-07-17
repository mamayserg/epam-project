import { render } from '@testing-library/react';
import React from "react";
import SuccessDialog from '../SuccessDialog'

describe('searchCard', ()=>{
  test('renders snapshot searchCard', () => {
   const { asFragment } = render(<SuccessDialog open={true} />);
    expect(asFragment(<SuccessDialog/>)).toMatchSnapshot();
  });
})