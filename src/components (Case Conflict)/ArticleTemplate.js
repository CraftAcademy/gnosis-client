import React from "react";
import { Container, Divider, Header, Placeholder } from "semantic-ui-react";

function ArticleTemplate(props) {
  const article = props.article;

  return (
    <>
      <Container>
        <div id={`article_${article.id}`}>
          <Header size="medium" textAlign="left" id="title">
            {article.title}
          </Header>
          <Placeholder.Paragraph id="body">
            {article.body}
          </Placeholder.Paragraph>
          <Header as="h5" textAlign="right" id="author">
            {article.author}
          </Header>
          <Header as="h5" textAlign="right" id="date">
            {article.date}
          </Header>
          <Divider />
        </div>
      </Container>
    </>
  );
}

export default ArticleTemplate;
