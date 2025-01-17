import React from 'react';
import styled, { withTheme } from 'styled-components';
import { func, oneOf, node, bool } from 'prop-types';
import { margins } from '@gympass/yoga-system';

import { StyledTag, StyledText } from './Tag';
import Icon from '../../Icon';

const Informative = styled(StyledTag)`
  ${({
    variant,
    theme: {
      yoga: {
        colors: {
          text,
          feedback: { [variant]: color = { light: text.secondary } },
        },
        components: { tag },
      },
    },
  }) => `
    background-color: ${color.light};
    border-color: ${color.light};
    border-radius: ${tag.border.radius}px;
  `}

  ${margins}
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledTextInformative = styled(StyledText)`
  ${({
    theme: {
      yoga: {
        colors: { text },
        components: { tag },
      },
    },
  }) => `
    color: ${text.primary};

    font-size: ${tag.font.size}px;
    line-height: ${tag.font.lineHeight}px;
    font-weight: ${tag.font.weight};
  `}
`;

/** Tags should be keywords to categorize or organize an item. */
const TagInformative = ({
  children,
  icon,
  theme: {
    yoga: {
      colors: { text },
      components: { tag },
    },
  },
  small,
  ...props
}) => (
  <Informative small={small} {...props}>
    <Wrapper>
      {icon && (
        <Icon
          as={icon}
          size={small ? tag.icon.size.small : tag.icon.size.default}
          fill={text.primary}
          marginRight={tag.icon.margin.right}
        />
      )}
      <StyledTextInformative>{children}</StyledTextInformative>
    </Wrapper>
  </Informative>
);

TagInformative.propTypes = {
  /** style the tag following the theme (neutral, success, informative, attention) */
  variant: oneOf(['neutral', 'success', 'informative', 'attention']),
  icon: func,
  children: node.isRequired,
  /** Can send small to use this variant */
  small: bool,
};

TagInformative.defaultProps = {
  variant: 'neutral',
  icon: undefined,
  small: false,
};

TagInformative.displayName = 'Tag.Informative';

export default withTheme(TagInformative);
