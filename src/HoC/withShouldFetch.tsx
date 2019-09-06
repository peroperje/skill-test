import React, { ElementType, useEffect } from 'react';

const withShouldFetch = (comparePropName: string, fetchFnPropsName: string) => {
  return (Component: ElementType): ElementType => {
    const ShouldFetch: React.FC<any> = props => {
      const {
        [comparePropName]: compare,
        [fetchFnPropsName]: fetchFn,
        ...rest
      } = props;

      useEffect(() => {
        if (compare) {
          fetchFn();
        }
      }, [compare, fetchFn]);
      return <Component {...rest} />;
    };

    return ShouldFetch;
  };
};

export default withShouldFetch;
