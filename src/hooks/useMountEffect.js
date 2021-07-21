import { useEffect } from 'react';

// useMountEffect is a React hook similar to the componentDidMount method of a React Component class
export default function (effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(effect, []);
}
