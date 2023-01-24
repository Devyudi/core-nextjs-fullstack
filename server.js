
import sitemap from 'nextjs-sitemap-generator'
import express from 'express';
import path from 'path'
import {parse} from 'url'
import 'dotenv/config'
import next from 'next';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000 ;

if(!dev){



    // const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();


    (async()=>{
        await sitemap({
            alternateUrls: {
                en: process.env.NEXT_PUBLIC_SITE_URL,
                es: process.env.NEXT_PUBLIC_SITE_URL,
                ja: process.env.NEXT_PUBLIC_SITE_URL,
                fr: process.env.NEXT_PUBLIC_SITE_URL,
            },
            baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
            ignoredPaths: ['admin','profile','dashboard'],
            extraPaths: ['/extraPath'],
            pagesDirectory: path.resolve(path.join(__dirname,"src", "pages")),
            targetDirectory: path.resolve(path.join(__dirname, "public")),
            sitemapFilename: 'sitemap.xml',
            nextConfigPath: path.resolve(path.join(__dirname, "next.config.js"))
        });

        console.log(`✅ sitemap.xml generated!`);
    })();

}else{
    (async()=>{
        await sitemap({
            alternateUrls: {
                en: process.env.NEXT_PUBLIC_SITE_URL,
                es: process.env.NEXT_PUBLIC_SITE_URL,
                ja: process.env.NEXT_PUBLIC_SITE_URL,
                fr: process.env.NEXT_PUBLIC_SITE_URL,
            },
            baseUrl: process.env.NEXT_PUBLIC_SITE_URL,
            ignoredPaths: ['admin','profile','dashboard'],
            extraPaths: ['/extraPath'],
            pagesDirectory: path.resolve(path.join(__dirname,"src", "pages")),
            targetDirectory: path.resolve(path.join(__dirname, "public")),
            sitemapFilename: 'sitemap.xml',
            nextConfigPath:path.resolve(path.join(__dirname, "next.config.js"))
        })
        console.log(`✅ sitemap.xml generated!`);
    })();


}

app.prepare().then(() => {

    const server = express();

    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
        res.header("Access-Control-Allow-Credentials", 'true');
        next();
    });

    server.all("*", (req,res)=> handle(req,res))

    server.listen(PORT, ()=> {

        console.log(`✅ Ready on PORT ${PORT}`);
    });
})


