import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	components: {
		Input: {
			variants: {
				default: {
					field: {
						bg: 'blue.200',
						borderColor: 'blue.500',
						borderWidth: '1px',
						_focus: {
							bg: 'blue.100'
						}
					}
				},
				invalid: {
					field: {
						bg: 'red.200',
						borderColor: 'red.500',
						borderWidth: '1px',
						_focus: {
							bg: 'red.100'
						}
					}
				}
			},
			defaultProps: {
				variant: 'default'
			}
		},
		Button: {
			variants: {
				default: {
					bg: 'blue.200',
					borderColor: 'blue.500',
					borderWidth: '1px',
					_hover: {
						bg: 'blue.100'
					}
				},
				invalid: {
					bg: 'red.200',
					borderColor: 'red.500',
					borderWidth: '1px',
					_hover: {
						bg: 'red.100'
					}
				}
			},
			defaultProps: {
				variant: 'default'
			}
		}
	}
})

export default theme