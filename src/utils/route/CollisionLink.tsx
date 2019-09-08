import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

const CollisionLink = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'innerRef'>
>((props, ref) => {
  return <RouterLink innerRef={ref} {...props} />;
});

CollisionLink.displayName = 'CollisionLink';

export default CollisionLink;
