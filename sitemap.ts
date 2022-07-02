import axios, { AxiosResponse } from "axios";
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

const getRoutes = async () => {
  const routesReqUrl = new URL(
    "https://cdn.contentful.com/spaces/" +
      process.env.CTF_SPACE_ID +
      "/environments/master/entries?access_token=" +
      process.env.CTF_ACCESS_TOKEN +
      "&content_type=projects"
  );

  const routesReq: AxiosResponse = await axios.get(routesReqUrl.toString());

  return routesReq.data.items;
};

export const generateSitemap = async () => {
  const routes = await getRoutes();

  if (!routes) {
    return;
  }

  const sitemap = new SitemapStream({
    hostname: process.env.DOMAIN,
  });

  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  sitemap.write({ url: "/", lastmod: new Date() });
  sitemap.write({ url: "/works", lastmod: new Date() });

  routes.forEach((x) => {
    // exclude routes with no case study
    x.fields.caseStudy
      ? sitemap.write({
          url: `/works/${x.fields.slug}`,
          lastmod: x.sys.updatedAt,
        })
      : null;
  });

  sitemap.end();
};
