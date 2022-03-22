exports.handler = async event => {
  if (event.queryStringParameters.fb) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: 'https://superpetstv.com/dog-cries-with-joy-when-r%e1%b4%87%e1%b4%9c%c9%b4%c9%aa%e1%b4%9b%e1%b4%87%e1%b4%85-with-c%e1%b4%8f%e1%b4%a1/'
      }
    }
  } else {
    let pathName = event.path.split('/')[3].split('-')
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: process.env.URL + '/' + pathName[0] + '/' + pathName[1] + '/'
      }
    }
  }
}
