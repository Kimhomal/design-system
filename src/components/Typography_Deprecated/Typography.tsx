// import styled from '@emotion/styled';
// import React, {
//   CSSProperties,
//   ElementType,
//   forwardRef,
//   PropsWithChildren,
// } from 'react';
// import { Variant, Weight } from '../../system/createTheme/createTypography';
// import useThemeWithoutDefault from '../../system/useThemeWithoutDefault';
// import { OwnerStateProps } from '../common';

// export interface TypographyProps {
//   component?: ElementType;
//   /**
//    * `true`일 때 `p` element tag가 적용됨
//    * @default false
//    */
//   paragraph?: boolean;
//   variant: Variant;
//   weight: Weight;
//   style?: CSSProperties | undefined;
//   /**
//    * `true`일 때 text는 `0.35em`의 bottom margin style이 적용됨
//    * @default false
//    */
//   gutterBottom?: boolean;
// }

// const TypographyRoot = styled('span', {
//   shouldForwardProp: (prop) =>
//     prop !== 'theme' && prop !== 'ownerState' && prop !== 'as',
// })<OwnerStateProps<TypographyProps>>(({ theme, ownerState }) => ({
//   margin: 0,
//   ...(theme?.typography?.[ownerState.variant]?.[ownerState.weight] ||
//     ownerState.themeProps.typography[ownerState.variant][ownerState.weight]),
//   ...(ownerState.gutterBottom && {
//     marginBottom: '0.35em',
//   }),
// }));

// const Typography = forwardRef<HTMLElement, PropsWithChildren<TypographyProps>>(
//   (props, ref) => {
//     const themeProps = useThemeWithoutDefault();

//     const {
//       variant = 'body1',
//       weight = 'default',
//       component,
//       paragraph = false,
//       gutterBottom = false,
//       ...other
//     } = props;

//     const ownerState = {
//       ...props,
//       variant,
//       weight,
//       component,
//       paragraph,
//       themeProps,
//       gutterBottom,
//     };

//     const Component = component || (paragraph ? 'p' : 'span');

//     return (
//       <TypographyRoot
//         as={Component}
//         ownerState={ownerState}
//         ref={ref}
//         {...other}
//       />
//     );
//   }
// );

// export default Typography;
