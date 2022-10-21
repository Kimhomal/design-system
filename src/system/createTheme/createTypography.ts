import React from 'react';
import * as CSS from 'csstype';
import { deepmerge } from '../../utils';

export type Variant =
  | 'header'
  | 'title'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'caption1';

export type Weight = 'bold' | 'medium' | 'regular' | 'default';

export interface FontStyle
  extends Required<{
    fontFamily: React.CSSProperties['fontFamily'];
    fontSize: React.CSSProperties['fontSize'];
  }> {}

export interface FontStyleOptions extends Partial<FontStyle> {
  allVariants?: React.CSSProperties;
}

export type NormalCssProperties = CSS.Properties<number | string>;
export type Fontface = CSS.AtRule.FontFace & {
  fallbacks?: CSS.AtRule.FontFace[];
};
export interface BaseCSSProperties extends NormalCssProperties {
  // '@font-face'?: Fontface | Fontface[];
}
export interface CSSProperties extends BaseCSSProperties {
  // Allow pseudo selectors and media queries
  // `unknown` is used since TS does not allow assigning an interface without
  // an index signature to one with an index signature. This is to allow type safe
  // module augmentation.
  // Technically we want any key not typed in `BaseCSSProperties` to be of type
  // `CSSProperties` but this doesn't work. The index signature needs to cover
  // BaseCSSProperties as well. Usually you would use `BaseCSSProperties[keyof BaseCSSProperties]`
  // but this would not allow assigning React.CSSProperties to CSSProperties
  [k: string]: unknown | CSSProperties;
}

export type TypographyStyle = CSSProperties;
export interface TypographyStyleOptions extends TypographyStyle {}

export interface Typography
  extends Record<Variant, Partial<Record<Weight, TypographyStyle>>>,
    FontStyle {}

export interface TypographyOptions
  extends Partial<
    Record<Variant, Partial<Record<Weight, TypographyStyleOptions>>> &
      FontStyleOptions
  > {}

export const defaultTypography: Record<
  Variant,
  Partial<Record<Weight, TypographyStyle>>
> = {
  header: {
    bold: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 32,
      letterSpacing: -0.03,
    },
  },
  title: {
    bold: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 28,
      letterSpacing: -0.03,
    },
  },
  subtitle: {
    bold: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 26,
      letterSpacing: -0.03,
    },
    medium: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 26,
    },
    regular: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 26,
      letterSpacing: -0.03,
    },
  },
  body1: {
    bold: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 24,
      letterSpacing: -0.03,
    },
    medium: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 24,
      letterSpacing: -0.03,
    },
    regular: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24,
      letterSpacing: -0.03,
    },
  },
  body2: {
    medium: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 20,
    },
    regular: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 20,
    },
  },
  caption1: {
    medium: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 18,
    },
    regular: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 18,
    },
  },
};

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

const createTypography = (typography: TypographyOptions): Typography => {
  const {
    fontFamily = defaultFontFamily, // 기본 font
    fontSize = 14, // px
    allVariants, // 추가적인 css style. 모든 typography에 적용
    ...other
  } = typography;

  // 인자값과 기본 css style을 적용한 객체를 반환하는 함수
  const buildVariant = (
    fontWeight: React.CSSProperties['fontWeight'] = 400,
    size: React.CSSProperties['fontSize'] = fontSize,
    lineHeight: React.CSSProperties['lineHeight'] = 20,
    letterSpacing: React.CSSProperties['letterSpacing'] = 0
  ) => ({
    fontFamily,
    fontWeight,
    fontSize: size,
    lineHeight: lineHeight + 'px',
    letterSpacing,
    ...allVariants,
  });

  const variants = JSON.parse(JSON.stringify(defaultTypography));
  Object.keys(variants).forEach((key) => {
    if (key === '__proto__') return;

    Object.keys(variants[key as Variant]).forEach((secondKey) => {
      if (secondKey === '__proto__') return;

      const properties = { ...variants[key as Variant][secondKey as Weight] };
      variants[key as Variant][secondKey as Weight] = {
        ...buildVariant(
          properties.fontWeight,
          properties.fontSize,
          properties.lineHeight,
          properties.letterSpacing
        ),
      };
    });
  });

  return deepmerge(
    {
      fontFamily,
      fontSize,
      ...variants,
    },
    other,
    { clone: false }
  );
};

export default createTypography;
