import { render } from '@testing-library/react';
import React from "react";
import SuccessDialog from '../components/dialogs/SuccessDialog'
import React from 'react';

describe('searchCard', ()=>{
  test('renders snapshot searchCard', () => {
   const { asFragment } = render(<SuccessDialog open={true} />);
    expect(asFragment(<SuccessDialog/>)).toMatchSnapshot();
  });
})