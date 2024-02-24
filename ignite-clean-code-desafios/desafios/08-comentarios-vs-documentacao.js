async function register({email, name, avatar}) {
  if (!avatar) return { error: 'avatar is required' }

  if(!name) return { error: 'name is required' }

  const userMail = getUserByEmail(email)

  if (userMail) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatarConvertedToPNG = convertImageToJPG(avatar)

  const user = await createUser({ email, name, avatar: avatarConvertedToPNG })

  return { user }
}