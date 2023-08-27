import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { unified } from 'unified'
var md = require('markdown-it')(),
    mk = require('@iktakahiro/markdown-it-katex');
md.use(mk);

const postsDirectory = path.join(process.cwd(), 'public/gallery_crop');
const postsDirectory2 = path.join(process.cwd(), 'public/gallery');

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

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

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory2, `${id}`);

  const fileNames = fs.readdirSync(postsDirectory2);

  const pwdfile = fileNames.find(i => i.includes(`${id}`));
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

const aboutDirectory = path.join(process.cwd(), '/src/markdown');

export async function getAbout() {
  const fullPath = path.join(aboutDirectory, 'about.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const yoyo = md.render(matterResult.content)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    contentHtml,
    ...matterResult.data,
    yoyo,
  };
}

