const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
export const isEmail = (email: string) => {
	return reEmail.test(String(email).toLowerCase())
}

export const isPassword = (password: string) => {
	return rePassword.test(password)
}