import React from 'react';
import {shallow, mount} from 'enzyme';
import ArticleTemplate from '../Components/ArticleTemplate';

describe('<ArticleTemplate />', () => {
  it('renders the correct title', () => {
    const article = [ {
      "id": 1,
      "author": "Dash L.",
      "date": "15th of August, 2019",
      "title": "A study on the maladapted social behaviours of pidgeons",
      "body": "They are seriously mean."
    }]
    const describedComponent = mount(<ArticleTemplate article={article} />)
    const response = <div id='title'>A study on the madapted social behaviours of pigeons</div>
    expect(describedComponent.contains(response)).toEqual(true)
  })
});

