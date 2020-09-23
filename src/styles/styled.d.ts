import 'styled-components';

import theme from './theme';

// Create a type based on the theme object
export type Theme = typeof theme;

// DefaultTheme interface has the same props as the Theme
declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
