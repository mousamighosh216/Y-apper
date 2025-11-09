export interface Blog {
  slug:string;
  image: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  rating: number;
  date: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch("https://script.google.com/macros/s/AKfycbwhgzjzZN1JadluNhf7-Oe30Bjeek3hykwkuGUVrDBCbAEa_zMtJ3lb1mravqgRtijP/exec");
  if (!res.ok) throw new Error("Failed to fetch blog data");
  const data = await res.json();

  // Flatten Google Sheets structure if needed
  return data.map((entry: any) => {
    const now = new Date(entry.date);
    const months = [ "January","February","March","April","May","June", "July","August","September","October","November","December" ]; 
    const formattedDate = `${now.getDate()}, ${months[now.getMonth()]} ${now.getFullYear()}`;

    return {
    slug: slugify(entry.title),
    image: entry.image,
    title: entry.title,
    content: entry.content,
    author: entry.author,
    tags: tag(entry.tags),
    rating: Number(entry.rating),
    date: formattedDate,
    };
  });
}

export function tag(tags: string): string[] {
  return tags
  .replace(/[\[\]"]+/g, "")
  .split(",")
  .map(temp => temp.trim());
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")   // remove special characters
    .replace(/\s+/g, "-");      // replace spaces with dashes
}

export function contents(content: string): string {
  const temp = content.split(" ");
  let para = "";
  for(let i=0; i<15; i++) {
    para += (temp[i]===undefined?" ":temp[i])+" ";
  }

  return para.trim();
}

