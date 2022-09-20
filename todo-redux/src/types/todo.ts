export interface dataFormType {
	email: { value: string },
	password: { value: string },
	userId: { value: string },
	reset: () => void
}

export interface errorFieldsType {
  email: boolean,
  password: boolean,
  userId: boolean
}

export interface errorTextType {
  email: string,
  password: string,
  userId: string
}
