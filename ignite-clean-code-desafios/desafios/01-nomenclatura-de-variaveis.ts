// Nomenclatura de variáveis

const userCategory = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGithubUserCategory(req, res) {
  const githubUser = String(req.query.username)

  if (!githubUser) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubUserSearchResult = await fetch(`https://api.github.com/users/${githubUser}`);

  if (githubUserSearchResult.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUser}" not found`
    })
  }

  const userData = await githubUserSearchResult.json()

  const userCategorySortedByFollowers = userCategory.sort((a, b) =>  b.followers - a.followers);

  const filteredUserCategory = userCategorySortedByFollowers.find(i => userData.followers > i.followers)

  const result = {
    githubUser,
    category: filteredUserCategory.title
  }

  return result
}

getGithubUserCategory({ query: {
  username: 'josepholiveira'
}}, {})