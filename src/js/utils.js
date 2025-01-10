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
