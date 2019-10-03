import React from 'react';
import { render } from '@testing-library/react';
import Dashboard, { addBall } from './Dashboard';

test('renders without crashing', () => {
    render(<Dashboard />);
  });
  
  test('addBall adds 1 to the current value', () => {
    let actual;
    let expected;
    actual = addBall(0);
    expected = 1;
    expect(actual).toBe(expected);
    expect(actual).not.toBe(4);
  
    expect(addBall(0)).toBe(1);
    expect(addBall(0)).not.toBe(2);
  });
  

  