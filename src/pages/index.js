import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header>dr.stick shop</header>
    <article class="wrapper">

</article>


    <h1>Hi people</h1>
    <p class="atten">※この漫画は1分で読めます※</p>
    
    <StaticImage
      src="../images/001.jpeg"
      width={600}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
        <StaticImage
      src="../images/004.jpg"
      width={600}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

<div class="keisan">
<p>1日に何本のタバコを吸いますか？</p>
<div class="cigarett">
<p><StaticImage
      src="../images/006.jpeg"
      width={74}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}
      
    /><br />
    <span><input type="radio" name="hyouka" value="good" checked="checked" />1本</span></p>
    <p><StaticImage
      src="../images/007.jpeg"
      width={74}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}
    /><br />
    <span><input type="radio" name="hyouka" value="good" checked="checked" />1本</span></p>
    <p><StaticImage
      src="../images/008.jpeg"
      width={74}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}
    /><br />
    <span><input type="radio" name="hyouka" value="good" checked="checked" />10本</span></p>
    <p><StaticImage
      src="../images/009.jpeg"
      width={74}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}
      /><br />
    <span><input type="radio" name="hyouka" value="good" checked="checked" />1本</span>
    </p>
   

</div>
</div>


        <StaticImage
      src="../images/001.jpeg"
      width={600}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
        <StaticImage
      src="../images/001.jpeg"
      width={600}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

    <div class="bn_link">
    <div class="bn">
    <StaticImage
      src="../images/arrow1.png"
      width={80}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}/>
      </div>

      <div class="bn">
      <Link to="/page-2/">
      <StaticImage
      src="../images/047.png"
      width={607}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `0` }}
      /></Link>
</div>
</div>
  </Layout>
)

export default IndexPage
