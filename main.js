const socialMediasLinks = {
  github: 'pedrofires',
  facebook: 'pedrofires',
  instagram: '_pedrofogos'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //indo no filho do sociallinks(o id no html)
    const socialName = li.getAttribute('class') //pegando o atributo class de li
    console.log(socialName)
    li.children[0].href = `https://${socialName}.com/${socialMediasLinks[socialName]}`
    //fazendo o social name como variável interavel no objeto social media links
  }
}

changeSocialMediaLinks()

function getGitHubUserInfo() {
  const url = `https://api.github.com/users/${socialMediasLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubUserInfo()
