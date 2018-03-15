import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col } from 'antd';

import { MainSectionHeading } from 'components/MainSectionHeading';

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  ${props => props.theme.dimensions.mainSection};
  color: ${props => props.theme.colors.text.dark};
  background: ${props => props.background};
  padding: ${props => props.theme.padding.eighty} 0;
`;

const Content = styled(Col)`
  ${props => props.theme.dimensions.div};
`;

const Children = styled.div`
  padding-top: ${props => props.theme.padding.fourtyEight};
`;

const MainSection = props => (
  <Wrapper background={props.background}>
    <Content span={18}>
      <MainSectionHeading title={props.title} description={props.description} />
      {props.children && <Children>{props.children}</Children>}
    </Content>
  </Wrapper>
);

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
  background: PropTypes.func,
};

MainSection.defaultProps = {
  description: '',
  children: '',
  background: props => props.theme.colors.background.white,
};

export default MainSection;
