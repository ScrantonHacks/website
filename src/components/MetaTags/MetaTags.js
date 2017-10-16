import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import AvatarImg from './../../../static/images/avatar.png';

const MetaTags = ({ title, description, path, tags, noIndex, siteUrl }) =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: tags },
      ]}
    >
      {noIndex && <meta name="robots" content="noindex" />}
      {getAsciiArt()}
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta
        property="og:image"
        content={`${siteUrl}${AvatarImg}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={`${siteUrl}${path}`} />
      <meta
        name="twitter:image"
        content={`${siteUrl}${AvatarImg}`}
      />
    </Helmet>
  </div>;

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  tags: PropTypes.string,
  noIndex: PropTypes.bool,
  siteUrl: PropTypes.string
};

export default MetaTags;


const getAsciiArt = () => {
  return `
   _____ __________  ___    _   ____________  _   __   __  _____   ________ _______
  / ___// ____/ __ \/   |  / | / /_  __/ __ \/ | / /  / / / /   | / ____/ //_/ ___/
  \__ \/ /   / /_/ / /| | /  |/ / / / / / / /  |/ /  / /_/ / /| |/ /   / ,<  \__ \ 
 ___/ / /___/ _, _/ ___ |/ /|  / / / / /_/ / /|  /  / __  / ___ / /___/ /| |___/ / 
/____/\____/_/ |_/_/  |_/_/ |_/ /_/  \____/_/ |_/  /_/ /_/_/  |_\____/_/ |_/____/  


  ___                                               _ _________     _             
 |_ _|  ______ ___   _  _ ___ _  _   __ _ _ _ ___  | |__ /__ / |_  | |_  __ ___ __
  | |  (_-< -_) -_) | || / _ \ || | / _\` | '_/ -_) | ||_ \|_ \  _| | ' \/ _\` \ \ /
 |___| /__|___\___|  \_, \___/\_,_| \__,_|_| \___| |_|___/___/\__| |_||_\__,_/_\_\
                     |__/                                                         


             _                  
 __ __ _____| |__ ___ _ __  ___ 
 \ V  V / -_) / _/ _ \ '  \/ -_)
  \_/\_/\___|_\__\___/_|_|_\___|
                                

    `;

}
