import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from "remark-gfm";
import html from 'remark-html';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export function getSortedPostsData(adress) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(adress.adress);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(adress.adress, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(adress) {
   const fileNames = fs.readdirSync(adress.adress);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
export async function getPostData(id, adress) {
  const fullPath = path.join(adress, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedPostsData2(adress) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(adress.adress);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id

    // Combine the data with the id
    const pwdfile = path.join('/gallery_crop', fileName);
    const id = fileName.replace(/\.[^/.]+$/, "");
    return {
      id,
      pwdfile,
    };
  });
  // Sort posts by date
  return allPostsData.splice(0+0,0+15).sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds2(adress) {
  const fileNames = fs.readdirSync(adress.adress);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.[^/.]+$/, ""),
	fname: fileName,
      },
    };
  });
}

export async function getPostData2(id, adress) {
  const fileNames = fs.readdirSync(adress);
  console.log("bjam 1!");
  console.log(fileNames);
  console.log(id);
  const pwdfile = fileNames.find(i => i.includes(`${id}`));
  console.log(pwdfile);
  console.log("bjam 2!");
  const mdate = fs.statSync(`public/gallery/${pwdfile}`).mtime;
  const mdatejson = JSON.parse(JSON.stringify(mdate))
  // const mdate= fs.stat("/dir/file.txt", function(err, stats){
  //   return stats.mtime;
  //  });
	

  // Combine the data with the id and contentHtml
  return {
    id:id,
    pwdfile:pwdfile,
    mdatejson:mdatejson,
  };
}
