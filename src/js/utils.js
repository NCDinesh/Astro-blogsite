export function slugify(text) {
  return text
    .toString() // Convert to string
    .trim() // Remove leading/trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-') // Remove consecutive dashes
    .replace(/[^\w-]+/g, '') // Remove non-word characters (except dashes)
    .replace(/--+/g, '-') // Replace consecutive dashes with one dash
    .replace(/-+$/, ''); // Remove trailing dashes
}

export function formatDate(date){
  return new Date(date).toLocaleDateString('en-US',{timeZone: "UTC"})
}

export function formatBlogPosts(posts,{filterOutDrafts=false,
  filterOutFuturePosts=true,
  sortByDate=true,
limit=undefined
}={}){
const filteredPosts = posts.reduce((acc,post) => {
  const {date,draft}=post.frontmatter;

  if(filterOutDrafts && draft) return acc;
  if(filterOutFuturePosts && new Date(date) > new Date()) return acc;

  acc.push(post)
  return acc;
},[])

if(sortByDate){ filteredPosts.sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))}
else{
  filteredPosts.sort(()=>Math.random()-0.5)
}

if(typeof limit==="number"){
  return filteredPosts.slice(0,limit);
}

return filteredPosts;
}