const Slugger = (input, type) => {
  let slug = input
  slug = slug.toLowerCase()
  slug = slug.replace(/[^a-z0-9]/g, " ")
  slug = slug.replace(/(?:^|\s+)(?:and|a|an|the)(?=\s+|$)/g, "")
  slug = slug.trim()
  slug = slug.replace(/\s+/g, "-")
  return slug
}

export default Slugger
