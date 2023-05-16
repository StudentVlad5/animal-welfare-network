import React from 'react';
import sun from 'images/theme/sun.webp';
import moon from 'images/theme/moon.webp';
import { BtnChangeTheme, SwitcherWrapper } from './SwitchTheme.styled';
import { ThemeContext } from 'components/ThemeStatus/ThemeProvider';

export const SwitchTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setMode }) => (
        <SwitcherWrapper>
          <BtnChangeTheme
            onClick={e =>
              theme === 'light' ? setMode('dark') : setMode('light')
            }
          >
            {theme === 'light' ? (
              <img
                src={sun}
                alt="light theme"
                width="25"
                height="25"
                loading="lazy"
              />
            ) : (
              <img
                src={moon}
                alt="dark theme"
                width="25"
                height="25"
                loading="lazy"
              />
            )}
          </BtnChangeTheme>
        </SwitcherWrapper>
      )}
    </ThemeContext.Consumer>
  );
};
