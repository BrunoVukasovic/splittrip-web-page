import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/klis16x9.jpg";


export default ({ data: {klis} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={klis.frontmatter.title}>Contact Us</Button>
          <Button trip={klis.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: klis.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    klis: markdownRemark(
      frontmatter: { page: { eq: "klis" } }) {
      html
      frontmatter{title}
    }
  }
`;