import React from 'react';
import {shallow} from 'enzyme';
import ArticleTemplate from '../Components/ArticleTemplate';

describe('<ArticleTemplate />', () => {
  const article = {
    "id": 1,
    "author": "Dash L.",
    "date": "15th of August, 2019",
    "title": "A study on the maladapted social behaviours of pidgeons",
    "body": "They are seriously mean."
  }
  
  it('renders the correct title', () => {
    const describedComponent = shallow(<ArticleTemplate article={article} />)
    const response = article.title
    expect(describedComponent.contains(response)).toEqual(true)
    //Code for troubleshooting: expect(describedComponent.text()).toEqual(response)
  })

  it('renders the correct body content', () => {
    const describedComponent = shallow(<ArticleTemplate article={article} />)
    const response = article.body
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('renders the correct date', () => {
    const describedComponent = shallow(<ArticleTemplate article={article} />)
    const response = article.date
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('renders the correct author', () => {
    const describedComponent = shallow(<ArticleTemplate article={article} />)
    const response = article.author
    expect(describedComponent.contains(response)).toEqual(true)
  })
});

