const renderResponse = (res) => {
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`
  }
}

const renderRawResponse = (res) => {
  if (res.errors) {
    responseField.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ', \n')
    structuredRes = `<pre>${structuredRes}</pre>`
    responseField.innerHTML = `${structuredRes}`
  }
}

const renderJsonResponse = (response) => {
  let rawJson = {}
  for (let key in response) {
    rawJson[key] = response[key]
  }
  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n')
  responseField.innerHTML = `<pre>${rawJson}</pre>`
}
