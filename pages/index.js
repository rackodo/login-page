import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { Formik } from "formik";

export default function Login() {

	return(
		<Stack
		p={4}
		border="1px solid black"
		bg="blue.300"
		borderColor="blue.900"
		color="blue.900"
		borderRadius={15} >
			<Heading textAlign="center">Rackodo</Heading>
			<Formik
			initialValues={{ username: '', password: '' }}
			validate={values => {
				const errors = {}
				console.log(errors)
				if (!values.username) {
					errors.username = 'Required'
				}
				if (!values.password) {
					errors.password = 'Required'
				}
				if (errors.username || errors.password) {
					errors.form = true
				}
				return errors
			}} 
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
				}) => (
					<form onSubmit={handleSubmit}>
						<FormControl isRequired isInvalid={errors.username}>
							<FormLabel>Username</FormLabel>
							<Input
							type="text"
							name="username"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.username}
							variant={errors.username === undefined ? 'default' : 'invalid'}
							 />

							<FormErrorMessage>{errors.username}</FormErrorMessage>
						</FormControl>

						<FormControl isRequired isInvalid={errors.password}>
							<FormLabel>Password</FormLabel>
							<Input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							variant={errors.password === undefined ? 'default' : 'invalid'}
							value={values.password} />

							<FormErrorMessage>{errors.password}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<Button
							mt={4}
							type='submit'
							w="100%"
							variant={errors.form === undefined ? 'default' : 'invalid'}
							isDisabled={isSubmitting || errors.form} >
								Login
							</Button>
						</FormControl>
					</form>
				)}
			</Formik>
		</Stack>
	)
}