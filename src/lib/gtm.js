export const GTM_ID = 'GTM-P84GJR7' // process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}